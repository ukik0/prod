import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from '@/features/AuthByUsername/ui/LoginForm/LoginForm';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Initial: Story = {
    args: {},
};

export const InitialDark: Story = {
    args: {},
};

InitialDark.decorators = [ThemeDecorator({ theme: 'dark' })];
