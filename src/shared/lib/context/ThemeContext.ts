import { createContext, Dispatch, SetStateAction } from 'react';

export type Themes = 'light' | 'dark' | 'orange'

export interface ThemeContextProps {
    theme?: Themes
    setTheme: Dispatch<SetStateAction<Themes>>
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: 'light', setTheme: () => null });
