import { DeepPartial } from '@reduxjs/toolkit';

import { LoginSchema } from '@/features/auth/by-username';

import { loginActions, LoginReducer } from './index';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(
            LoginReducer(
                state as LoginSchema,
                loginActions.setUsername('123123'),
            ),
        ).toEqual({ username: '123123' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            LoginReducer(
                state as LoginSchema,
                loginActions.setPassword('123123'),
            ),
        ).toEqual({ password: '123123' });
    });
});
