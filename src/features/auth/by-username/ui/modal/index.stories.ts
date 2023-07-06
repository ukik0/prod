import type { Meta, StoryObj } from '@storybook/react';

import { LoginModal } from '@/features/auth/by-username';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof LoginModal> = {
    title: 'features/LoginModal',
    component: LoginModal,
    tags: ['autodocs'],
    decorators: [StoreDecorator({ user: { authData: null } })],
};

export default meta;

type Story = StoryObj<typeof LoginModal>;

export const Initial: Story = {
    args: {
        isOpen: true,
    },
};

export const InitialDark: Story = {
    args: {
        isOpen: true,
    },
};

InitialDark.decorators = [ThemeDecorator({ theme: 'dark' })];
