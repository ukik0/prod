import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/Store';
import { Article, ArticleView } from '@/entities/article';
import { fetchArticles } from '@/pages/articles';
import { ARTICLES_VIEW } from '@/shared/constants';

import { ArticlesStateSchema } from '../types/schema';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>((state) => state.articles || articlesAdapter.getInitialState());

export const articlesSlice = createSlice({
    name: 'articles',
    initialState: articlesAdapter.getInitialState<ArticlesStateSchema>(
        {
            isLoading: false,
            error: undefined,
            view: localStorage.getItem(ARTICLES_VIEW) as ArticleView,
            ids: [],
            entities: {},
        },
    ),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW, action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                state.error = undefined;
                articlesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const ArticlesActions = articlesSlice.actions;
export const ArticlesReducer = articlesSlice.reducer;
