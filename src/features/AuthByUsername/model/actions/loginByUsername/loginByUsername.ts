import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { User, userActions } from '@/entities/User';
import { AUTH_KEY_LS } from '@/shared/constants/localStorage';

interface AuthData {
    password: string
    username: string
}

export const loginByUsername = createAsyncThunk<User, AuthData>(
    'login/loginByUsername',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', data);

            if (!response.data) throw new Error();

            localStorage.setItem(AUTH_KEY_LS, JSON.stringify(response.data));
            localStorage.thunkAPI.dispatch(userActions.setUserData(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Error');
        }
    },
);
