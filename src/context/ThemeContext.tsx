import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type ThemeName = 'light' | 'dark'

export interface ThemePalette {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  muted: string
  border: string
}

export const themes: Record<ThemeName, ThemePalette> = {
  light: {
    primary: '#4f46e5',
    secondary: '#ec4899',
    accent: '#10b981',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#111827',
    muted: '#6b7280',
    border: '#e5e7eb',
  },
  dark: {
    primary: '#818cf8',
    secondary: '#f472b6',
    accent: '#34d399',
    background: '#111827',
    surface: '#1f2937',
    text: '#f9fafb',
    muted: '#9ca3af',
    border: '#374151',
  },
}

type ThemeContextType = {
  themeName: ThemeName
  theme: ThemePalette
  setThemeName: (name: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const saved = localStorage.getItem('theme') as ThemeName
    if (saved === 'light' || saved === 'dark') return saved
    
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })
  const theme = themes[themeName]

  useEffect(() => {
    localStorage.setItem('theme', themeName)
    const root = document.documentElement
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value)
    })
    root.setAttribute('data-theme', themeName)
  }, [theme, themeName])

  const value = useMemo(
    () => ({
      themeName,
      theme,
      setThemeName,
    }),
    [theme, themeName],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used inside a ThemeProvider')
  }

  return context
}
