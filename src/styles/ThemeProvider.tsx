import { ThemeProvider as StyledProvider } from "styled-components";
import { theme as staticTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider as AppThemeProvider, useTheme } from "../context/ThemeContext";

function StyledThemeProviderInternal({ children }: { children: React.ReactNode }) {
    const { theme: activePalette } = useTheme();

    const mergedTheme = {
        ...staticTheme,
        colors: {
            white: activePalette.surface,
            black: "#000000",
            primary: activePalette.primary,
            secondary: activePalette.secondary,
            accent: activePalette.accent,
            lightGray: activePalette.border,
            background: activePalette.background,
            text: activePalette.text,
            muted: activePalette.muted,
        }
    } as typeof staticTheme;

    return (
        <StyledProvider theme={mergedTheme}>
            <GlobalStyle />
            {children}
        </StyledProvider>
    );
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <AppThemeProvider>
            <StyledThemeProviderInternal>
                {children}
            </StyledThemeProviderInternal>
        </AppThemeProvider>
    );
}