import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Anchor } from '@/shared/ui/Anchor/Anchor';

const meta: Meta<typeof Anchor> = {
    title: 'shared/Anchor',
    component: Anchor,
    tags: ['autodocs'],
    args: {
        to: '/mock',
    },
};

export default meta;

type Story = StoryObj<typeof Anchor>;

export const Primary: Story = {
    args: {
        theme: 'primary',
        children: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        theme: 'secondary',
        children: 'secondary',
    },
};

export const Red: Story = {
    args: {
        theme: 'red',
        children: 'Red',
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: 'primary',
        children: 'primary',
    },
};
PrimaryDark.decorators = [ThemeDecorator({ theme: 'dark' })];

export const SecondaryDark: Story = {
    args: {
        theme: 'secondary',
        children: 'secondary',
    },
};
SecondaryDark.decorators = [ThemeDecorator({ theme: 'dark' })];

export const RedDark: Story = {
    args: {
        theme: 'red',
        children: 'Red',
    },
};
RedDark.decorators = [ThemeDecorator({ theme: 'dark' })];
