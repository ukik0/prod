import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '@/app/providers/Store';

import { StateSchema } from '../config/Schema';

interface storeProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({ children, initialState }: storeProps) => {
    const store = createStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
