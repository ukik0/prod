import type { Meta, StoryObj } from '@storybook/react';

import Articles from './articles';

const meta: Meta<typeof Articles> = {
    title: 'pages/Articles',
    component: Articles,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof Articles>;

export const Default: Story = {
    args: {

    },
};
