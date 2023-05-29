import { configureStore } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/Store';
import { CounterReducer } from '@/entities/Counter';
import { UserReducer } from '@/entities/User';

export const createStore = (initialState: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            counter: CounterReducer,
            user: UserReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
