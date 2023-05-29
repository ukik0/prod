import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from '@/shared/ui/Input/Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Placeholder: Story = {
    args: {
        value: 'Placeholder',
        placeholder: 'Placeholder text',
    },
};

export const AutoFocus: Story = {
    args: {
        value: 'AutoFocus',
        autoFocus: true,
    },
};

export const PlaceholderDark: Story = {
    args: {
        value: 'PlaceholderDark',
        placeholder: 'PlaceholderDark',
    },
};

PlaceholderDark.decorators = [ThemeDecorator({ theme: 'dark' })];
