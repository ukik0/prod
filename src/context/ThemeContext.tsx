import {createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState} from "react";

export type Themes = 'light' | 'dark'

export interface ThemeContextProps {
    theme?: Themes
    setTheme: Dispatch<SetStateAction<'light' | 'dark'>>
}

export const ThemeContext = createContext<ThemeContextProps>({theme: 'light', setTheme: () => null})

export const THEME_KEY_LS = 'theme'

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(localStorage.getItem(THEME_KEY_LS) as Themes || 'light');

    const themeProps = useMemo(() => ({theme, setTheme}), [theme])

    return (
        <ThemeContext.Provider value={themeProps}>
            {children}
        </ThemeContext.Provider>
    )
}