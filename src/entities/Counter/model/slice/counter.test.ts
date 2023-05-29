import { CounterReducer, CounterStateSchema } from '@/entities/Counter';
import { decrement, increment } from '@/entities/Counter/model/slice/counter';

describe('Counter slice', () => {
    test('should be increment', () => {
        const state: CounterStateSchema = {
            value: 10,
        };

        expect(CounterReducer(state, increment())).toEqual({ value: 11 });
    });
    test('should be decrement', () => {
        const state: CounterStateSchema = {
            value: 10,
        };

        expect(CounterReducer(state, decrement())).toEqual({ value: 9 });
    });
    test('should work with empty state', () => {
        expect(CounterReducer(undefined, decrement())).toEqual({ value: -1 });
    });
});
