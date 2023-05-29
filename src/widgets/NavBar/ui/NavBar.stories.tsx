import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NavBar } from '@/widgets/NavBar';

const meta: Meta<typeof NavBar> = {
    title: 'widgets/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    decorators: [StoreDecorator({ user: { authData: null } })],
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Light: Story = { args: {} };

export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator({ theme: 'dark' })];

export const Auth: Story = {
    args: {},
    decorators: [StoreDecorator({ user: { authData: { username: 'username', id: '1' } } })],
};

export const AuthDark: Story = {
    args: {},
    decorators: [StoreDecorator({ user: { authData: { username: 'username', id: '1' } } })],
};

AuthDark.decorators = [ThemeDecorator({ theme: 'dark' })];
