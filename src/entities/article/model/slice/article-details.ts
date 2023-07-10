import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Article } from '@/entities/article';

import { fetchArticle } from '../actions/fetch-article/fetch-article';
import { ArticleDetailsStateSchema } from '../types/schema';

const initialState: ArticleDetailsStateSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'article-details',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticle.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.data = undefined;
            })
            .addCase(fetchArticle.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
            })
            .addCase(fetchArticle.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.data = undefined;
            });
    },
});

export const ArticleDetailsActions = articleDetailsSlice.actions;
export const ArticleDetailsReducer = articleDetailsSlice.reducer;
