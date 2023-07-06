import type { Meta, StoryObj } from '@storybook/react';

import { ProfilePage } from '@/pages/profile';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = { args: {} };

Light.decorators = [StoreDecorator({})];

export const Dark: Story = { args: {} };

Dark.decorators = [ThemeDecorator({ theme: 'dark' }), StoreDecorator({})];
