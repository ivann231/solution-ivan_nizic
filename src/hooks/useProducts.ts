import {useQuery} from "@tanstack/react-query"
import { getProducts, getProductsByCategory } from "../api/products"

type UseProductsParams = {
    limit: number,
    skip: number,
    category?: string,
    enabled?: boolean,
};

export function useProducts({limit, skip, category, enabled}: UseProductsParams) {
    return useQuery({
        queryKey: ["products", category || "all", limit, skip],
        queryFn: () => category ? getProductsByCategory(category) : getProducts({limit, skip}),
        enabled,
        staleTime: 1000 * 60,
        retry: 1,
        refetchOnWindowFocus: false,
    });
}