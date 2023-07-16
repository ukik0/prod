import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {

    },
};
