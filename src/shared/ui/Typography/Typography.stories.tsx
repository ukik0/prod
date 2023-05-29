import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Typography } from '@/shared/ui/Typography/Typography';

const meta: Meta<typeof Typography> = {
    title: 'shared/Typography',
    component: Typography,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const VariantTitle: Story = {
    args: {
        children: 'VariantTitle',
        variant: 'title-1',
    },
};

export const VariantSubTitle: Story = {
    args: {
        children: 'VariantSubTitle',
        variant: 'title-2',
    },
};

export const VariantText: Story = {
    args: {
        children: 'VariantText',
        variant: 'text',
    },
};

export const VariantError: Story = {
    args: {
        children: 'VariantError',
        variant: 'error',
    },
};

export const VariantTitleDark: Story = {
    args: {
        children: 'VariantTitleDark',
        variant: 'title-1',
    },
};

VariantTitleDark.decorators = [ThemeDecorator({ theme: 'dark' })];

export const VariantSubTitleDark: Story = {
    args: {
        children: 'VariantSubTitle',
        variant: 'title-2',
    },
};

VariantSubTitleDark.decorators = [ThemeDecorator({ theme: 'dark' })];

export const VariantTextDark: Story = {
    args: {
        children: 'VariantText',
        variant: 'text',
    },
};

VariantTextDark.decorators = [ThemeDecorator({ theme: 'dark' })];

export const VariantErrorDark: Story = {
    args: {
        children: 'VariantError',
        variant: 'error',
    },
};

VariantErrorDark.decorators = [ThemeDecorator({ theme: 'dark' })];
