import type { Meta, StoryObj } from '@storybook/react';

import { ArticleList } from './article-list';

const meta: Meta<typeof ArticleList> = {
    title: 'entities/ArticleList',
    component: ArticleList,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof ArticleList>;

export const Default: Story = {
    args: {
    },
};
