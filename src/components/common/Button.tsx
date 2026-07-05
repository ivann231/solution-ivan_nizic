import styled from "styled-components";

export const BackButton = styled.button`
  display: inline-block;
  margin-bottom: 1rem;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font-size: ${({ theme }) => theme.fontsize.m};
  font-weight: 500;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;