import { StateSchema } from '@/app/providers/Store';
import { getProfileLoading } from '@/entities/profile/model/selectors';

describe('get-profile-error', () => {
    test('should be isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: true },
        };

        expect(getProfileLoading(state as StateSchema)).toBeTruthy();
    });
    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileLoading(state as StateSchema)).toBe(false);
    });
});
