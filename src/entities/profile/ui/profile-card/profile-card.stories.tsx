import type { Meta, StoryObj } from '@storybook/react';

import { Countries } from '@/entities/country';
import { Currency } from '@/entities/currency';
import { ProfileCard } from '@/entities/profile';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],

};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
    args: {
        data: {
            currency: Currency.RUB,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5wLyzZUPYlpXhD7T2DGZwR6CBnOeZqXohnLIGRcQHw&s',
            city: 'city',
            first: 'firstname',
            username: 'username',
            age: 20,
            country: Countries.Ukraine,
            lastname: 'lastname',
        },
    },
};

export const IsLoading: Story = {
    args: {
        data: {
            currency: Currency.RUB,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5wLyzZUPYlpXhD7T2DGZwR6CBnOeZqXohnLIGRcQHw&s',
            city: 'city',
            first: 'firstname',
            username: 'username',
            age: 20,
            country: Countries.Ukraine,
            lastname: 'lastname',
        },
        isLoading: true,
    },
};

export const Readonly: Story = {
    args: {
        data: {
            currency: Currency.RUB,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5wLyzZUPYlpXhD7T2DGZwR6CBnOeZqXohnLIGRcQHw&s',
            city: 'city',
            first: 'firstname',
            username: 'username',
            age: 20,
            country: Countries.Ukraine,
            lastname: 'lastname',
        },
        readonly: true,
    },
};

export const Error: Story = {
    args: {
        error: 'Error',
    },
};

export const Dark: Story = {
    args: {
        data: {
            currency: Currency.RUB,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5wLyzZUPYlpXhD7T2DGZwR6CBnOeZqXohnLIGRcQHw&s',
            city: 'city',
            first: 'firstname',
            username: 'username',
            age: 20,
            country: Countries.Ukraine,
            lastname: 'lastname',
        },
    },
};
Dark.decorators = [ThemeDecorator({ theme: 'dark' })];
