import type { Meta, StoryObj } from '@storybook/react';

import { Countries, CountrySelect } from '@/entities/country';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],

};

export default meta;

type Story = StoryObj<typeof CountrySelect>;

export const Default: Story = {
    args: {
        value: Countries.Russia,
    },
};

export const Dark: Story = {
    args: {
        value: Countries.Russia,
    },
};
Dark.decorators = [ThemeDecorator({ theme: 'dark' })];
