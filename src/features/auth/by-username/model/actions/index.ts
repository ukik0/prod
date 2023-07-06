import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';
import { User, userActions } from '@/entities/user';
import { AUTH_KEY_LS } from '@/shared/constants/localStorage';

interface AuthData {
    password: string
    username: string
}

export const loginByUsername = createAsyncThunk<User, AuthData, ThunkConfig<string>>(
    'login/loginByUsername',
    async (data, thunkAPI) => {
        const { rejectWithValue, dispatch, extra } = thunkAPI;

        try {
            const response = await extra.api.post('/login', data);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(AUTH_KEY_LS, JSON.stringify(response.data));
            dispatch(userActions.setUserData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
