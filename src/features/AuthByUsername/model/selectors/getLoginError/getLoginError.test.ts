import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/Store';

import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'Error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('Error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(null);
    });
});
