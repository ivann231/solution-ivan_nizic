import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: background-color 0.3s ease, border-color 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled(Link)`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-decoration: none;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease, border-color 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: rotate(20deg) scale(1.08);
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.25rem 1rem;
  }
`;

export function MainLayout() {
  const { themeName, setThemeName } = useTheme();

  return (
    <LayoutContainer>
      <Header>
        <Logo to="/">Online store</Logo>
        <Nav>
          <ToggleButton
            onClick={() => setThemeName(themeName === "light" ? "dark" : "light")}
            aria-label="Toggle dark mode"
          >
            {themeName === "light" ? "🌙" : "☀️"}
          </ToggleButton>
        </Nav>
      </Header>
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
}
