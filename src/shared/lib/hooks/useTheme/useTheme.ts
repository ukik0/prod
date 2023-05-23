import { useContext } from 'react';

import { THEME_KEY_LS } from '../../../constants/localStorage';
import { ThemeContext, Themes } from '../../context/ThemeContext';

interface ThemeReturnProps {
    theme: Themes
    toggleTheme: () => void
}

export const useTheme = (): ThemeReturnProps => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const currentTheme = theme === 'light' ? 'dark' : 'light';

        setTheme(currentTheme);

        localStorage.setItem(THEME_KEY_LS, currentTheme);
    };

    return { theme, toggleTheme };
};
