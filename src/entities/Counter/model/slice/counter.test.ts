import { counterActions, CounterReducer, CounterStateSchema } from '@/entities/Counter';

describe('Counter slice', () => {
    test('should be increment', () => {
        const state: CounterStateSchema = {
            value: 10,
        };

        expect(CounterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('should be decrement', () => {
        const state: CounterStateSchema = {
            value: 10,
        };

        expect(CounterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('should work with empty state', () => {
        expect(CounterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 });
    });
});
