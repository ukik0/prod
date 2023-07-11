import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';
import { getArticleDetailsData } from '@/entities/article/model/selectors';
import { Comment } from '@/entities/comment';
import { getUserData } from '@/entities/user/model/selectors';
import { fetchComments } from '@/pages/article-details/model/actions/fetch-comments/fetch-comments';

export const createArticleComment = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/create-article-comment',
    async (text, thunkAPI) => {
        const {
            rejectWithValue, extra, getState, dispatch,
        } = thunkAPI;

        const user = getUserData(getState());
        const article = getArticleDetailsData(getState());

        if (!user || !text || !article) return thunkAPI.rejectWithValue('Error');

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: user.id,
                text,
            });

            if (!response.data) {
                throw new Error('Error');
            }
            dispatch(fetchComments(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue('Ошибка получения профиля');
        }
    },
);
