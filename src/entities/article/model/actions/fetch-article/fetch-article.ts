import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';

import { Article } from '../../types/index';

export const fetchArticle = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetch-article',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`);

            if (!response.data) {
                throw new Error('Error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Ошибка получения статьи');
        }
    },
);
