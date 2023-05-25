import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from '@/pages/NotFoundPage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = { args: {} };

export const Dark: Story = { args: {} };

Dark.decorators = [ThemeDecorator({ theme: 'dark' })];
