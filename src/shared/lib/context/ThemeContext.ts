import { createContext, Dispatch, SetStateAction } from 'react';

export type Themes = 'light' | 'dark'

export interface ThemeContextProps {
    theme?: Themes
    setTheme: Dispatch<SetStateAction<'light' | 'dark'>>
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: 'light', setTheme: () => null });
