import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/Store';
import { ProfileReducer } from '@/entities/profile';
import { LoginReducer } from '@/features/auth/by-username/model/slice';

const INITIAL_REDUCERS: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: LoginReducer,
    profile: ProfileReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => (Story) => (
    <StoreProvider initialState={state} asyncReducers={INITIAL_REDUCERS as ReducersMapObject<StateSchema>}>
        <Story />
    </StoreProvider>
);
