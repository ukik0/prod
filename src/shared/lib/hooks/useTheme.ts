import { useContext } from 'react';

import { THEME_KEY_LS } from '../../constants/localStorage';
import { ThemeContext, Themes } from '../context/ThemeContext';

interface ThemeReturnProps {
    theme: Themes | undefined
    toggleTheme: () => void
}

export const useTheme = (): ThemeReturnProps => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let currentTheme: Themes;

        switch (theme) {
        case 'light':
            currentTheme = 'orange';
            break;
        case 'dark':
            currentTheme = 'light';
            break;
        case 'orange':
            currentTheme = 'dark';
            break;
        default: currentTheme = 'dark';
        }

        setTheme(currentTheme);

        localStorage.setItem(THEME_KEY_LS, currentTheme);
    };

    return { theme, toggleTheme };
};
