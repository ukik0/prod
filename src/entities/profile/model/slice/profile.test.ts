import { Countries } from '@/entities/country';
import { Currency } from '@/entities/currency';
import {
    ProfileActions, ProfileReducer, ProfileStateSchema, updateProfile,
} from '@/entities/profile';

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

describe('profile slice', () => {
    test('should be set readonly state', () => {
        const state: ProfileStateSchema = {
            readonly: true,
        };

        expect(ProfileReducer(state, ProfileActions.setReadonly(false))).toEqual({ readonly: false });
    });

    test('should be cancel edit', () => {
        const state: ProfileStateSchema = {
            data,
            form: {
                username: '123',
            },
        };

        expect(ProfileReducer(state, ProfileActions.cancelEdit())).toEqual({ form: data, data, readonly: true });
    });

    test('should be update profile', () => {
        const state: ProfileStateSchema = {
            form: {
                username: '123',
            },
        };

        expect(ProfileReducer(state, ProfileActions.updateProfile({ username: '123321' }))).toEqual({ form: { username: '123321' } });
    });

    test('update profile pending action', () => {
        const state: ProfileStateSchema = {
            data: undefined,
            error: undefined,
            form: undefined,
            isLoading: false,
            readonly: false,
        };

        expect(ProfileReducer(state, updateProfile.pending)).toEqual({ ...state, isLoading: true });
    });

    test('update profile fulfilled action', () => {
        const state: ProfileStateSchema = {
            isLoading: true,
        };

        expect(ProfileReducer(state, updateProfile.fulfilled(data, '', '1'))).toEqual({
            isLoading: false, error: undefined, data, form: data, readonly: true,
        });
    });

    test('should work with empty state', () => {
        expect(ProfileReducer(undefined, ProfileActions.setReadonly(false))).toEqual({
            data: undefined,
            error: undefined,
            form: undefined,
            isLoading: false,
            readonly: false,
        });
    });
});
