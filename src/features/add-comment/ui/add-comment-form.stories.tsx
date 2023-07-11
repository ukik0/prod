import type { Meta, StoryObj } from '@storybook/react';

import { StoreProvider } from '@/app/providers/Store';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import AddCommentForm from './add-comment-form';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>;

export const Default: Story = {
    args: {

    },
};

Default.decorators = [StoreDecorator({})];
