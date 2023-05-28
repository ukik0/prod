import { Decorator } from '@storybook/react';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { clsx } from '@/shared/lib/helprers/classNames/classNames';

export const ThemeDecorator = ({ theme }: { theme: AppThemes }): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={clsx({ cls: 'app', additional: [theme] })}>
            <Story />
        </div>
    </ThemeProvider>
);
