import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/Store';
import { LoginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';

const INITIAL_REDUCERS: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: LoginReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => (Story) => (
    <StoreProvider initialState={state} asyncReducers={INITIAL_REDUCERS as ReducersMapObject<StateSchema>}>
        <Story />
    </StoreProvider>
);
