import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from '@/shared/ui/select/select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Label: Story = {
    args: {
        label: 'Label',
    },
};

export const LabelWithOptions: Story = {
    args: {
        label: 'Label',
        options: [{ value: 'Value', content: 'Content' }],
    },
};

export const WithoutLabel: Story = {
    args: {
        options: [{ value: 'Value', content: 'Content' }],
    },
};

export const DarkModeSelect: Story = {
    args: {
        label: 'Label',
        options: [{ value: 'Value', content: 'Content' }, { value: 'Value2', content: 'Content2' }],
    },
};
DarkModeSelect.decorators = [ThemeDecorator({ theme: 'dark' })];
