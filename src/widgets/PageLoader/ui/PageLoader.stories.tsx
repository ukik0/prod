import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageLoader } from '@/widgets/PageLoader';

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PageLoader>;

export const Light: Story = { args: {} };

export const Dark: Story = { args: {} };

Dark.decorators = [ThemeDecorator({ theme: 'dark' })];
