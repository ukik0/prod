import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { SideBar } from '@/widgets/SideBar';

const meta: Meta<typeof SideBar> = {
    title: 'widgets/SideBar',
    component: SideBar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Light: Story = { args: {} };

export const Dark: Story = { args: {} };

Dark.decorators = [ThemeDecorator({ theme: 'dark' })];
