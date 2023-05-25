import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NavBar } from '@/widgets/NavBar';

const meta: Meta<typeof NavBar> = {
    title: 'widgets/NavBar',
    component: NavBar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Light: Story = { args: {} };

export const Dark: Story = { args: {} };

Dark.decorators = [ThemeDecorator({ theme: 'dark' })];
