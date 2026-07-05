import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../../types/product";
import {
  DetailWrapper, MediaSection, MainImageContainer, MainImage,
  ImageGallery, GalleryThumbnail, InfoSection, CategoryBadge,
  ProductTitle, RatingContainer, RatingText, ProductPrice,
  DescriptionHeading, ProductDescription, MetaDetailsGrid, MetaItem, MetaLabel, MetaValue
} from "./ProductDetail.styles";
import { BackButton } from "../../common/Button";

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.thumbnail);
  const navigate = useNavigate();
  // Helper to render rating stars
  const renderStars = (rating: number) => {
    const roundedRating = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i}>{i < roundedRating ? "★" : "☆"}</span>
    ));
  };

  const isOutOfStock = product.stock <= 0;

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>
        ← Back to products
      </BackButton>
      <DetailWrapper>
        <MediaSection>
          <MainImageContainer>
            <MainImage src={selectedImage} alt={product.title} />
          </MainImageContainer>
          {product.images && product.images.length > 0 && (
            <ImageGallery>
              {product.images.map((image) => (
                <GalleryThumbnail
                  key={image}
                  src={image}
                  alt={`${product.title} gallery`}
                  $active={selectedImage === image}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </ImageGallery>
          )}
        </MediaSection>

        <InfoSection>
          <CategoryBadge>{product.category}</CategoryBadge>
          <ProductTitle>{product.title}</ProductTitle>

          <RatingContainer>
            {renderStars(product.rating)}
            <RatingText>({product.rating.toFixed(2)})</RatingText>
          </RatingContainer>

          <ProductPrice>
            {product.price} <span>€</span>
          </ProductPrice>

          <DescriptionHeading>Description</DescriptionHeading>
          <ProductDescription>{product.description}</ProductDescription>

          <MetaDetailsGrid>
            <MetaItem>
              <MetaLabel>Availability</MetaLabel>
              <MetaValue $inStock={!isOutOfStock}>
                {isOutOfStock ? "Out of Stock" : `In Stock (${product.stock} units)`}
              </MetaValue>
            </MetaItem>
            <MetaItem>
              <MetaLabel>Product ID</MetaLabel>
              <MetaValue>#{product.id}</MetaValue>
            </MetaItem>
          </MetaDetailsGrid>
        </InfoSection>
      </DetailWrapper>
    </>
  );
};
