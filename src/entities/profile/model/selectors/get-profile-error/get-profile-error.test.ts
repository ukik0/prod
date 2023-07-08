import { StateSchema } from '@/app/providers/Store';
import { getProfileError } from '@/entities/profile/model/selectors';

describe('get-profile-error', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: 'error' },
        };

        expect(getProfileError(state as StateSchema)).toBe('error');
    });
    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});
