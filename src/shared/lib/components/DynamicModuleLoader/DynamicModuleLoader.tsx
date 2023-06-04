import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { ReduxStoreManager } from '@/app/providers/Store';
import { StateSchemaKeys } from '@/app/providers/Store/config/Schema';

export type Reducers = {
    [key in StateSchemaKeys]?: Reducer
}

type ReducerEntries = [keyof Reducers, Reducer]

interface DynamicModuleLoaderProps {
    reducers: Reducers
    children: JSX.Element
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = ({
    children,
    reducers,
    removeAfterUnmount = true,
}: DynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]: ReducerEntries) => store.reducerManager.add(key, reducer));
        dispatch({ type: '@@INIT reducer' });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([key, _]: ReducerEntries) => store.reducerManager.remove(key));
                dispatch({ type: '@@REMOVE reducer' });
            }
        };
        // eslint-disable-next-line
    }, []);

    return children;
};
