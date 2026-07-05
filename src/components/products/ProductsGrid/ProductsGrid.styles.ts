import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing.l};
  padding: ${({ theme }) => theme.spacing.m} 0;
  width: 100%;
  margin: 0;
  background-color: transparent;
`;