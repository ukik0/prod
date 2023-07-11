import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';

import { getProfileForm } from '../../selectors/index';
import { Profile } from '../../types';

export const updateProfile = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
    'profile/update-profile',
    async (profileId, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        if (!profileId) return thunkAPI.rejectWithValue('Error');

        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<Profile>(`/profile/${profileId}`, formData);

            if (!response.data) {
                throw new Error('Error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Ошибка получения профиля');
        }
    },
);
