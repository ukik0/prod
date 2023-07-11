import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { CommentCard } from './comment-card';

const meta: Meta<typeof CommentCard> = {
    title: 'shared/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Default: Story = {
    args: {
        comment: {
            id: '1',
            text: 'text',
            user: {
                id: '1',
                username: 'username',
            },
        },
    },
};

Default.decorators = [StoreDecorator({ comments: {} })];
