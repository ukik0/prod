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
        theme: null,
    },
};

export const Clear: Story = {
    args: {
        children: 'Clear',
        theme: 'clear',
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'ClearInverted',
        theme: 'clearInverted',
    },
};

export const Outlined: Story = {
    args: {
        children: 'Outlined',
        theme: 'outline',
    },
};

export const Background: Story = {
    args: {
        children: 'Background',
        theme: 'background',
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'BackgroundInverted',
        theme: 'backgroundInverted',
    },
};

export const Square: Story = {
    args: {
        children: 'Square',
        square: true,
    },
};

export const SizeL: Story = {
    args: {
        children: 'SizeL',
        size: 'L',
    },
};

export const SizeM: Story = {
    args: {
        children: 'SizeM',
        size: 'M',
    },
};

export const SizeXL: Story = {
    args: {
        children: 'SizeXL',
        size: 'XL',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
    },
};

export const OutlinedDark: Story = {
    args: {
        children: 'Outlined',
    },
};

OutlinedDark.decorators = [ThemeDecorator({ theme: 'dark' })];
