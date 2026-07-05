import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "../api/products";

type UseSearchProductsParams = {
    query: string;
    limit: number;
    skip: number;
    enabled?: boolean;
};

export function useSearchProducts({
    query,
    limit,
    skip,
    enabled = true,
}: UseSearchProductsParams) {
    return useQuery({
        queryKey: ["products", "search", query, limit, skip],
        queryFn: () => searchProducts(query, limit, skip),
        enabled,
        staleTime: 1000 * 60,
        retry: 1,
        refetchOnWindowFocus: false,
    });
}