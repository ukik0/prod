import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';

import { Profile } from '../../types';

export const fetchProfile = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetch-profile',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) {
                throw new Error('Error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Ошибка получения профиля');
        }
    },
);
