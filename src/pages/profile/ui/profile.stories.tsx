import type { Meta, StoryObj } from '@storybook/react';

import { Countries } from '@/entities/country';
import { Currency } from '@/entities/currency';
import { ProfilePage } from '@/pages/profile';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = { args: {} };

Light.decorators = [StoreDecorator({
    profile: {
        form: {
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
})];

export const Dark: Story = { args: {} };

Dark.decorators = [ThemeDecorator({ theme: 'dark' }), StoreDecorator({
    profile: {
        form: {
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
})];
