import {createContext} from "react";

type themes = 'light' | 'dark'

export interface ThemeContextProps {
    theme?: themes
    setTheme: (theme: themes) => void
}

export const ThemeContext = createContext<ThemeContextProps>({theme: 'light', setTheme: () => null})

export const THEME_KEY_LS = 'theme'

export const ThemeProvider = () => {
    return (
        <ThemeContextProps.
    )
}