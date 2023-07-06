import { memo } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames';
import { useTheme } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps extends ReactTagProps<'button'> {
    className?: string
}

export const ThemeSwitcher = memo(({ className, ...rest }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme="clear" onClick={toggleTheme} className={clsx({ additional: [className] })} {...rest}>
            {theme === 'dark' ? <Icon name="theme/sun" /> : <Icon name="theme/moon" />}
        </Button>
    );
});
