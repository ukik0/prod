import { StateSchema } from '@/app/providers/Store';
import { getProfileReadonly } from '@/entities/profile/model/selectors';

describe('get-profile-error', () => {
    test('should be readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readonly: false },
        };

        expect(getProfileReadonly(state as StateSchema)).toBe(false);
    });
    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
    });
});
