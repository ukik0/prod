import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginByUsername } from '@/features/auth/by-username/model/actions';

import { LoginSchema } from '../types';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const loginActions = loginSlice.actions;
export const LoginReducer = loginSlice.reducer;
