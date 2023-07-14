import type { Meta, StoryObj } from '@storybook/react';

import { Paper } from './paper';

const meta: Meta<typeof Paper> = {
    title: 'widgets/Paper',
    component: Paper,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof Paper>;

export const Default: Story = {
    args: {

    },
};
