import styled from "styled-components";

interface PaginationProps {
  page: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.m};
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.m} 0;
`;

const PaginationButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  font-size: ${({ theme }) => theme.fontsize.n};
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease, background-color 0.3s ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.span`
  font-size: ${({ theme }) => theme.fontsize.n};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  transition: color 0.3s ease;
`;

export const Pagination = ({ page, totalPages, hasPrevPage, hasNextPage, onPrev, onNext }: PaginationProps) => {
  return (
    <PaginationContainer>
      <PaginationButton disabled={!hasPrevPage} onClick={onPrev}>
        Prev
      </PaginationButton>

      <PageIndicator>
        Page {page} of {totalPages}
      </PageIndicator>

      <PaginationButton disabled={!hasNextPage} onClick={onNext}>
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};
