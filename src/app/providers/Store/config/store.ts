import { configureStore } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/Store';
import { CounterReducer } from '@/entities/Counter';
import { UserReducer } from '@/entities/User';
import { LoginReducer } from '@/features/AuthByUsername';

export const createStore = (initialState: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            counter: CounterReducer,
            user: UserReducer,
            login: LoginReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
