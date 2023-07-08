import { StateSchema } from '@/app/providers/Store';
import { Countries } from '@/entities/country';
import { Currency } from '@/entities/currency';
import { getProfileForm } from '@/entities/profile/model/selectors';

describe('get-profile-form', () => {
    test('should be equal data', () => {
        const form = {
            currency: Currency.RUB,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5wLyzZUPYlpXhD7T2DGZwR6CBnOeZqXohnLIGRcQHw&s',
            city: 'city',
            first: 'firstname',
            username: 'username',
            age: 20,
            country: Countries.Ukraine,
            lastname: 'lastname',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('empty state', () => {
        const data = {
            currency: Currency.RUB,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5wLyzZUPYlpXhD7T2DGZwR6CBnOeZqXohnLIGRcQHw&s',
            city: 'city',
            first: 'firstname',
            username: 'username',
            age: 20,
            country: Countries.Ukraine,
            lastname: 'lastname',
        };

        const state: DeepPartial<StateSchema> = {

        };

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
