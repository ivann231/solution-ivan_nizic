import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  padding: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
  overflow: hidden;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  .img-container {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    margin: 1rem;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
    
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;
  }

  .hover .img {
    transform: scale(1.05);
  }

  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontsize.m};
  }

  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.fontsize.n};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsize.n};
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontsize.s};
  }
`;

export const ProductTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontsize.m};
  font-weight: bold;
  padding: 0 10px 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontsize.m};
  }

  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.fontsize.n};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsize.n};
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontsize.n};
  }
`;

export const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme.fontsize.s};
`;

export const ProductImage = styled.img`
 
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: ${({ theme }) => theme.fontsize.m};
  font-weight: bold;

  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontsize.m};
  }

  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.fontsize.n};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontsize.n};
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontsize.n};
  }
`;
