import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetails from './article-details';

const meta: Meta<typeof ArticleDetails> = {
    title: 'pages/ArticleDetails',
    component: ArticleDetails,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof ArticleDetails>;

export const Default: Story = {
    args: {

    },
};
