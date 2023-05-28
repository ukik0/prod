import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from '@/shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const isOpen: Story = {
    args: {
        children: 'isOpen',
        isOpen: true,
    },
};

export const isOpenDark: Story = {
    args: {
        children: 'isOpenDark',
        isOpen: true,
    },
};

isOpenDark.decorators = [ThemeDecorator({ theme: 'dark' })];
