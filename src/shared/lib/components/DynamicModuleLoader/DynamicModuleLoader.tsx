import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

import { ReduxStoreManager } from '@/app/providers/Store';
import { StateSchemaKeys } from '@/app/providers/Store/config/Schema';
import { useAppDispatch } from '@/shared/lib/hooks';

export type Reducers = {
    [key in StateSchemaKeys]?: Reducer
}

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
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]) => {
            store.reducerManager.add(key as StateSchemaKeys, reducer);
            dispatch({ type: `@INIT ${key} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([key]) => {
                    store.reducerManager.remove(key as StateSchemaKeys);
                    dispatch({ type: `@DESTROY ${key} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return children;
};
