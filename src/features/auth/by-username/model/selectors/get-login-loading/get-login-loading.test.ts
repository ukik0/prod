import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/Store';

import { getLoginLoading } from './get-login-loading';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true,
            },
        };
        expect(getLoginLoading(state as StateSchema)).toBe(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginLoading(state as StateSchema)).toBe(false);
    });
});
