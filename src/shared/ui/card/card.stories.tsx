import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './card';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {

    },
};
