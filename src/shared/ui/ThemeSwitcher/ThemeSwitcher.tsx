import { clsx } from '@/shared/lib/helprers/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps extends ReactTagProps<'button'> {
    className?: string
}

export const ThemeSwitcher = ({ className, ...rest }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme="clear" onClick={toggleTheme} className={clsx({ additional: [className] })} {...rest}>
            {theme === 'dark' ? <Icon name="theme/sun" /> : <Icon name="theme/moon" />}
        </Button>
    );
};
