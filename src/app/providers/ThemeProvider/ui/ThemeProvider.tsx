import { ReactNode, useMemo, useState } from 'react';
import { ThemeContext, Themes } from '@/shared/lib/context/ThemeContext';
import { THEME_KEY_LS } from '@/shared/constants/localStorage';

export const ThemeProvider = ({ children }: {children: ReactNode}) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(localStorage.getItem(THEME_KEY_LS) as Themes || 'light');

    const themeProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={themeProps}>
            {children}
        </ThemeContext.Provider>
    );
};
