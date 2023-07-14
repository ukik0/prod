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
            page: 1,
            limit: 5,
            hasMore: true,
            _inited: false,
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
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLimit: (state) => {
            state.limit = state.view === ArticleView.BIG ? 4 : 9;
        },
        initState: (state) => {
            state.limit = state.view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                articlesAdapter.addMany(state, action.payload);
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const ArticlesActions = articlesSlice.actions;
export const ArticlesReducer = articlesSlice.reducer;
