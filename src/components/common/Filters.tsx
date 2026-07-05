import type { Category } from '../../types/category';
import styled from "styled-components";

interface FiltersProps {
  value: string;
  categories: Category[];
  onChange: (value: string) => void;
}

const StyledSelect = styled.select`
  padding: 0.75rem 2.5rem 0.75rem 1.25rem;
  font-size: ${({ theme }) => theme.fontsize.n};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease, color 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%239CA3AF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.25rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
`;

export const Filters = ({ value, categories, onChange }: FiltersProps) => {
  return (
    <StyledSelect value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">All categories</option>
      {categories?.map((cat) => (
        <option key={cat.slug} value={cat.name}>
          {cat.name}
        </option>
      ))}
    </StyledSelect>
  );
};
