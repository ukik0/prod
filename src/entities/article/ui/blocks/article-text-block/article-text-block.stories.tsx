import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockType } from '@/entities/article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { TextBlock } from './article-text-block';

const meta: Meta<typeof TextBlock> = {
    title: 'entities/TextBlock',
    component: TextBlock,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof TextBlock>;

export const WithAvatar: Story = {
    args: {
        block: {
            type: ArticleBlockType.TEXT,
            id: '1',
            title: 'title',
            paragraphs: ['par1', 'par2'],
        },
    },
};

export const DarkMode: Story = {
    args: {
        block: {
            type: ArticleBlockType.TEXT,
            id: '1',
            title: 'title',
            paragraphs: ['par1', 'par2'],
        },
    },
};

DarkMode.decorators = [ThemeDecorator({ theme: 'dark' })];
