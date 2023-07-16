import type { Meta, StoryObj } from '@storybook/react';

import { SortArticles } from './sort-articles';

const meta: Meta<typeof SortArticles> = {
    title: 'features/SortArticles',
    component: SortArticles,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof SortArticles>;

export const Default: Story = {
    args: {

    },
};
