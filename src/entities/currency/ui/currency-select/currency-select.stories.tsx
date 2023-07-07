import type { Meta, StoryObj } from '@storybook/react';

import { Currency, CurrencySelect } from '@/entities/currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    tags: ['autodocs'],

};

export default meta;

type Story = StoryObj<typeof CurrencySelect>;

export const Default: Story = {
    args: {
        value: Currency.RUB,
    },
};

export const Dark: Story = {
    args: {
        value: Currency.RUB,
    },
};
Dark.decorators = [ThemeDecorator({ theme: 'dark' })];
