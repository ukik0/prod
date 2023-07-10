import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockType } from '@/entities/article';

import { ImageBlock } from './article-image-block';

const meta: Meta<typeof ImageBlock> = {
    title: 'Entities/ImageBlock',
    component: ImageBlock,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof ImageBlock>;

export const Default: Story = {
    args: {
        block: {
            type: ArticleBlockType.IMAGE,
            id: '1',
            title: 'title',
            src: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80',
        },
    },
};

export const DarkMode: Story = {
    args: {
        block: {
            type: ArticleBlockType.IMAGE,
            id: '1',
            title: 'title',
            src: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80',
        },
    },
};
