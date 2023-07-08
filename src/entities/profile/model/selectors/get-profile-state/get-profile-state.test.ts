import { StateSchema } from '@/app/providers/Store';
import { Countries } from '@/entities/country';
import { Currency } from '@/entities/currency';
import { getProfileState } from '@/entities/profile/model/selectors';

describe('get-profile-state', () => {
    test('should return counter value', () => {
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
            profile: {
                data,
            },
        };

        expect(getProfileState(state as StateSchema)).toEqual(data);
    });
    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileState(state as StateSchema)).toEqual(undefined);
    });
});
