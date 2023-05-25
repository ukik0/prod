import { Decorator } from '@storybook/react';

import { clsx } from '@/shared/lib/helprers/classNames/classNames';

export const ThemeDecorator = ({ theme }: {theme: AppThemes}): Decorator => (Story) => (
    <div className={clsx({ cls: 'app', additional: [theme] })}>
        <Story />
    </div>
);
