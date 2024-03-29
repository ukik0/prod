import { StateSchema } from '@/app/providers/Store';

import { getLoginPassword } from './get-login-password';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: 'pass',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toBe('pass');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
