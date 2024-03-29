import { ReactNode, useMemo, useState } from 'react';

import { THEME_KEY_LS } from '@/shared/constants/localStorage';
import { ThemeContext, Themes } from '@/shared/lib/context/ThemeContext';

interface ThemeProviderProps {
    children: ReactNode
    initialTheme?: Themes
}

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Themes>(initialTheme || (localStorage.getItem(THEME_KEY_LS) as Themes || 'light'));

    const themeProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={themeProps}>
            {children}
        </ThemeContext.Provider>
    );
};
