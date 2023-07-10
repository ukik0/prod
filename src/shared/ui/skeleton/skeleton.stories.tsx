import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { isOpenDark } from '@/shared/ui/Modal/Modal.stories';

import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Rounded: Story = {
    args: {
        width: 200,
        height: 200,
        radius: '50%',
    },
};

export const Square: Story = {
    args: {
        width: '100%',
        height: 200,
        radius: '0',
    },
};

export const DarkMode: Story = {
    args: {
        width: 200,
        height: 200,
        radius: '0',
    },
};

DarkMode.decorators = [ThemeDecorator({ theme: 'dark' })];
