import { useNavigate } from "react-router-dom";

import { type Product } from "../../../types/product";
import { Card, ProductDescription, ProductImage, ProductPrice, ProductTitle } from "./ProductCard.styles";

interface Props {
    product: Product;
};

export function ProductCard({product}: Props){
    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(`/products/${product.id}`)} style={{ cursor: "pointer" }}>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductImage src={product.thumbnail} alt={product.title} />
            <ProductPrice>{product.price} €</ProductPrice>
        </Card>
    )
}