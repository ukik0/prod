import { createSlice } from '@reduxjs/toolkit';

import { ProfileStateSchema } from '@/entities/profile';

const initialState: ProfileStateSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
});

export const ProfileActions = ProfileSlice.actions;
export const ProfileReducer = ProfileSlice.reducer;
