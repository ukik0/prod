import { createSlice } from '@reduxjs/toolkit';

import { CounterStateSchema } from '@/entities/Counter';

const initialState: CounterStateSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export const CounterReducer = counterSlice.reducer;
