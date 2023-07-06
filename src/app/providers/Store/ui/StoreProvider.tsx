import { ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { createStore } from '@/app/providers/Store';

import { StateSchema } from '../config/Schema';

interface storeProps {
    children: JSX.Element
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: ReducersMapObject<StateSchema>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: storeProps) => {
    const store = createStore(initialState as StateSchema, asyncReducers!);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
