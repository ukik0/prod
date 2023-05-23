import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import cl from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Button } from '@/shared/ui/Button';

interface ThemeSwitcherProps extends ReactTagProps<'button'>{
    className?: string
}

export const ThemeSwitcher = ({ className, ...rest }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} className={clsx({ cls: cl.ThemeSwitcher, additional: [className] })} {...rest}>
            {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
