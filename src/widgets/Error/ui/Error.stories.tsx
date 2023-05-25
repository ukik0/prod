import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Error } from '@/widgets/Error';

const meta: Meta<typeof Error> = {
    title: 'widgets/Error',
    component: Error,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Error>;

export const Light: Story = { args: {} };

export const Dark: Story = { args: {} };

Dark.decorators = [ThemeDecorator({ theme: 'dark' })];
