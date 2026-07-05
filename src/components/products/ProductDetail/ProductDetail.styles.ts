import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  margin-top: ${({ theme }) => theme.spacing.m};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.l};
    padding: ${({ theme }) => theme.spacing.m};
  }
`;

export const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m};
`;

export const MainImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ImageGallery = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.s};
  flex-wrap: wrap;
`;

export const GalleryThumbnail = styled.img<{ $active?: boolean }>`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  cursor: pointer;
  border: 2px solid ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
  transition: transform 0.2s ease, border-color 0.2s ease;
  background-color: ${({ theme }) => theme.colors.lightGray};

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CategoryBadge = styled.span`
  align-self: flex-start;
  font-size: ${({ theme }) => theme.fontsize.s};
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  background-color: rgba(59, 130, 246, 0.1);
  padding: 4px 10px;
  border-radius: 9999px;
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.s};
`;

export const ProductTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.s} 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontsize.n};
  color: #f59e0b; /* Yellow rating color */
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;

export const RatingText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  margin-left: ${({ theme }) => theme.spacing.xs};
`;

export const ProductPrice = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.m};

  span {
    font-size: 20px;
    font-weight: 500;
    color: #6b7280; /* Gray secondary text */
    margin-left: 2px;
  }
`;

export const DescriptionHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontsize.m};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
`;

export const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme.fontsize.n};
  color: #4b5563; /* Slate gray */
  line-height: 1.6;
  margin: 0 0 ${({ theme }) => theme.spacing.l} 0;
`;

export const MetaDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.m};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-top: ${({ theme }) => theme.spacing.m};
  margin-top: auto;
`;

export const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MetaLabel = styled.span`
  font-size: ${({ theme }) => theme.fontsize.s};
  color: #6b7280;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const MetaValue = styled.span<{ $inStock?: boolean }>`
  font-size: ${({ theme }) => theme.fontsize.n};
  font-weight: 600;
  color: ${({ $inStock, theme }) =>
    $inStock === undefined
      ? theme.colors.text
      : $inStock
        ? '#10b981' /* Green in-stock */
        : '#ef4444' /* Red out-of-stock */
  };
`;
