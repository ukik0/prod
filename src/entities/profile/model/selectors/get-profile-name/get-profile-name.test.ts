import { StateSchema } from '@/app/providers/Store';
import { getProfileName } from '@/entities/profile/model/selectors';

describe('get-profile-error', () => {
    test('should be named', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { data: { username: 'user' } },
        };

        expect(getProfileName(state as StateSchema)).toBe('user');
    });
    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileName(state as StateSchema)).toBe('');
    });
});
