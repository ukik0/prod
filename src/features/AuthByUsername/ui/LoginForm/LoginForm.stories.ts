import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from '@/features/AuthByUsername/ui/LoginForm/LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        login: {
            username: 'user', password: 'password', error: null, isLoading: false,
        },
    })],
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

export const Error: Story = {
    args: {},
};

Error.decorators = [StoreDecorator({ login: { error: 'Error' } })];

export const Loading: Story = {
    args: {},
};

Loading.decorators = [StoreDecorator({ login: { isLoading: true } })];
