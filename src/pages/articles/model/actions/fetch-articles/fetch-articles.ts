import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';
import { Article } from '@/entities/article';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'article/fetch-articles',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('/articles', { params: { _expand: 'user' } });

            if (!response.data) {
                throw new Error('Error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Ошибка получения статей');
        }
    },
);
