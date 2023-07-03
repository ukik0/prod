import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

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

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]: ReducerEntries) => store.reducerManager.add(key, reducer));

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([key]: ReducerEntries) => store.reducerManager.remove(key));
            }
        };
        // eslint-disable-next-line
    }, []);

    return children;
};
