import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from '@/entities/article';

import { SwitchArticleView } from './switch-article-view';

const meta: Meta<typeof SwitchArticleView> = {
    title: 'features/SwitchArticleView',
    component: SwitchArticleView,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof SwitchArticleView>;

export const Default: Story = {
    args: {
        view: ArticleView.BIG,
    },
};
