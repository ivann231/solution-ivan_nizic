import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { useDebounce } from "../hooks/useDebounce";
import { useProducts } from "../hooks/useProducts";
import { useSearchProducts } from "../hooks/useSearchProducts";
import { useCategories } from "../hooks/useCategories";

import { EmptyState } from "../components/common/EmptyState";
import { ErrorState } from "../components/common/ErrorState";
import { Filters } from "../components/common/Filters";
import { Loader } from "../components/common/Loader";
import { Pagination } from "../components/common/Pagination";
import { SearchInput } from "../components/common/SearchInput";
import { ProductCard } from "../components/products/ProductCard/ProductCard";
import { Grid } from "../components/products/ProductsGrid/ProductsGrid.styles";
import type { Product } from "../types/product";

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.m};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ProductsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const { data: categories } = useCategories();
    const category = searchParams.get("category") || "";
    const page = Math.max(1, Number(searchParams.get("page") || 1) || 1);

    const q = searchParams.get("q") || "";
    const [search, setSearch] = useState(q);

    useEffect(() => {
        setSearch(q);
    }, [q]);

    const debouncedSearch = useDebounce(search, 2000);

    const limit = 36;
    const skip = (page - 1) * limit

    const productsQuery = useProducts({
        limit,
        skip,
        category: category || undefined,
        enabled: debouncedSearch === "",
    });
    const searchQuery = useSearchProducts({ query: debouncedSearch, limit, skip, enabled: debouncedSearch !== "" });

    const productsData = debouncedSearch
        ? searchQuery.data
        : productsQuery.data;

    const isLoading = debouncedSearch
        ? searchQuery.isLoading
        : productsQuery.isLoading;

    const isError = debouncedSearch
        ? searchQuery.isError
        : productsQuery.isError;

    const totalPages = productsData ? Math.ceil(productsData.total / limit) : 1;
    const hasPrevPage = page > 1;
    const hasNextPage = productsData ? page * limit < productsData.total : false;

    const filteredProducts = useMemo(() => {
        if (!productsData) return [];
        return productsData.products;
    }, [productsData]);

    if (isLoading) return <Loader label="Loading products..." />;

    if (isError) return <ErrorState message="Error loading products" />;

    if (!productsData?.products?.length) return <EmptyState message="No products found" />;

    return (
        <>
            <Toolbar>
                <SearchInput
                    value={search}
                    onChange={(value) => {
                        setSearch(value);

                        setSearchParams((prev) => {
                            const params = new URLSearchParams(prev);

                            if (value) {
                                params.set("q", value);
                            } else {
                                params.delete("q");
                            }
                            params.set("page", "1");
                            params.delete("category")

                            return params;
                        });
                    }}
                />
                <Filters
                    value={category}
                    categories={categories || []}
                    onChange={(value) => {
                        setSearchParams((prev) => {
                            const params = new URLSearchParams(prev);

                            if (value) {
                                params.set("category", value);
                            } else {
                                params.delete("category");
                            }
                            params.set("page", "1");
                            params.delete("q");

                            return params;
                        });
                    }}
                />
            </Toolbar>
            <Grid>
                {filteredProducts.map((product: Product) => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))}
            </Grid>
            <Pagination
                page={page}
                totalPages={totalPages}
                hasPrevPage={hasPrevPage}
                hasNextPage={hasNextPage}
                onPrev={() =>
                    setSearchParams((prev) => {
                        const params = new URLSearchParams(prev);
                        params.set("page", String(page - 1));
                        return params;
                    })
                }
                onNext={() =>
                    setSearchParams((prev) => {
                        const params = new URLSearchParams(prev);
                        params.set("page", String(page + 1));
                        return params;
                    })
                }
            />
        </>
    )
};