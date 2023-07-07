import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@/shared/ui/avatar/avatar';

// @ts-ignore
import MockAvatar from './mock-avatar.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {
        size: 300,
    },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const WithAvatar: Story = {
    args: {
        src: MockAvatar,
    },
};

export const WithAlt: Story = {
    args: {
        src: '.',
        alt: 'Alt',
    },
};
