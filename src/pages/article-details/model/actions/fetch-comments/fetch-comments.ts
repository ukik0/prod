import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';
import { Comment } from '@/entities/comment';

export const fetchComments = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'article/fetch-comments',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        if (!articleId) return thunkAPI.rejectWithValue('Error');

        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error('Error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Ошибка получения комментариев');
        }
    },
);
