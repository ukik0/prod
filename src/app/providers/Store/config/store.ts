import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/Store';
import { createReducerManager } from '@/app/providers/Store/config/reducerManager';
import { CounterReducer } from '@/entities/Counter';
import { UserReducer } from '@/entities/User';

export const createStore = (initialState: StateSchema, asyncReducers: ReducersMapObject<StateSchema>) => {
    const reducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
    };

    const reducerManager = createReducerManager(reducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
