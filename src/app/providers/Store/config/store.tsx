import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import { StateSchema } from '@/app/providers/Store';
import { ThunkApi } from '@/app/providers/Store/config/Schema';
import { createReducerManager } from '@/app/providers/Store/config/reducerManager';
import { CounterReducer } from '@/entities/Counter';
import { UserReducer } from '@/entities/user';
import { apiInstance } from '@/shared/api';

export const createStore = (initialState: StateSchema, asyncReducers: ReducersMapObject<StateSchema>) => {
    const reducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
    };

    const reducerManager = createReducerManager(reducer);

    const navigate = useNavigate();

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: apiInstance,
                    navigate,
                },
            },
        }),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
