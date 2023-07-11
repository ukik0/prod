import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './comment-list';

const meta: Meta<typeof CommentList> = {
    title: 'shared/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof CommentList>;

export const Default: Story = {
    args: {

    },
};
