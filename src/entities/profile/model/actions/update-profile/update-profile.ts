import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';

import { getProfileForm } from '../../selectors/index';
import { Profile } from '../../types';

export const updateProfile = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/update-profile',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Ошибка получения профиля');
        }
    },
);
