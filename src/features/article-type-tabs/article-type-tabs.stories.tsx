import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTypeTabs } from './article-type-tabs';

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof ArticleTypeTabs>;

export const Default: Story = {
    args: {

    },
};
