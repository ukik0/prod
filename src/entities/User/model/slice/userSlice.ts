import { createSlice } from '@reduxjs/toolkit';

import { UserStateSchema } from '@/entities/User';

const initialState: UserStateSchema = {
    authData: {
        id: '',
        username: '',
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => {

        },
    },
});

export const {} = userSlice.actions;
export const UserReducer = userSlice.reducer;
