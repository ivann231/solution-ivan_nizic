import type { Category } from "../types/category";
import type { Product, ProductsResponse } from "../types/product";
import { BASE_URL } from "./client";

export type GetProductsParams = {
    limit: number;
    skip: number;
};

export const getProducts = async ({ limit, skip }: GetProductsParams): Promise<ProductsResponse> => {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);

    if (!response.ok) {
        throw new Error("Error fetching products, HTTP status: " + response.status);
    }

    return response.json();
};

export const getProduct = async (id: number): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if (!response.ok) {
        throw new Error("Error fetching product, HTTP status: " + response.status);
    }

    return response.json();
};

export const searchProducts = async (query: string, limit: number, skip: number): Promise<ProductsResponse> => {
    const response = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}`);

    if (!response.ok) {
        throw new Error("Error searching products, HTTP status: " + response.status);
    }

    return response.json();
};

export const getProductsByCategory = async (category: string): Promise<ProductsResponse> => {
    const response = await fetch(`${BASE_URL}/products/category/${encodeURIComponent(category)}`);

    if (!response.ok) {
        throw new Error("Error fetching category products, HTTP status: " + response.status);
    }

    return response.json();
};

export const getCategories = async (): Promise<Category[]> => {
    const response = await fetch(`${BASE_URL}/products/categories`);

    if (!response.ok) {
        throw new Error("Error fetching categories, HTTP status: " + response.status);
    }

    return response.json();
}; 