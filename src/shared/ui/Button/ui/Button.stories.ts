import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Primary',
        theme: '',
    },
};

export const Clear: Story = {
    args: {
        children: 'Clear',
        theme: 'clear',
    },
};

export const Outlined: Story = {
    args: {
        children: 'Outlined',
        theme: 'outline',
    },
};

export const OutlinedDark: Story = {
    args: {
        children: 'Outlined',
        theme: 'outline',
    },
};

OutlinedDark.decorators = [ThemeDecorator({ theme: 'dark' })];
