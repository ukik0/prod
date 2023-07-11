import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';

import { Profile } from '../../types';

export const fetchProfile = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
    'profile/fetch-profile',
    async (profileId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        if (!profileId) return thunkAPI.rejectWithValue('Error');

        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error('Error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Ошибка получения профиля');
        }
    },
);
