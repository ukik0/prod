import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';
import { Article } from '@/entities/article';

import * as model from '../../selectors';

interface FetchArticlesProps {
    page?: number
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
    'article/fetch-articles',
    async ({ page = 1 }, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const limit = model.getArticlesLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', { params: { _expand: 'user', _page: page, _limit: limit } });

            if (!response.data) {
                throw new Error('Error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Ошибка получения статей');
        }
    },
);
