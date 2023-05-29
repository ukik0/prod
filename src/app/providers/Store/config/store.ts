import { configureStore } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/Store';
import { CounterReducer } from '@/entities/Counter';

export const createStore = (initialState: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            counter: CounterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
