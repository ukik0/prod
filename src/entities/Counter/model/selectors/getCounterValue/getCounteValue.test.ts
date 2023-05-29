import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/Store';
import { getCounterValue } from '@/entities/Counter/model/selectors';

describe('getCounterValue', () => {
    test('should be equal', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };

        expect(getCounterValue(state as StateSchema)).toBe(10);
    });
});
