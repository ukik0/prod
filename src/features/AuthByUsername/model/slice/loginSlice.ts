import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginByUsername } from '../actions/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/types';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: null,
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
                state.error = null;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const loginActions = loginSlice.actions;
export const LoginReducer = loginSlice.reducer;
