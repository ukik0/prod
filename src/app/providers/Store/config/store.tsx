import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/Store';
import { createReducerManager } from '@/app/providers/Store/config/reducerManager';
import { UserReducer } from '@/entities/user';
import { ScrollPositionPersistenceReducer } from '@/features/scroll-position-persistence';
import { apiInstance } from '@/shared/api';

export const createStore = (initialState: StateSchema, asyncReducers: ReducersMapObject<StateSchema>) => {
    const reducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        scrollPersistence: ScrollPositionPersistenceReducer,
        user: UserReducer,
    };

    const reducerManager = createReducerManager(reducer);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: apiInstance,
                },
            },
        }),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
