import { useParams } from "react-router-dom";

import { useProduct } from "../hooks/useProduct";
import { ProductDetail } from "../components/products/ProductDetail/ProductDetail";

export const ProductDetailsPage = () => {
    const { id } = useParams();
    const productId = Number(id);
    const { data: product, isLoading, isError } = useProduct(productId);

    if (isLoading) return <p>Loading product...</p>;
    if (isError || !product) return <p>Product not found.</p>;

    return (
        <div >
            <ProductDetail product={product} />
        </div>
    );
};