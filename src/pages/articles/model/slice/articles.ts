import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/Store';
import {
    Article, ArticleOrderFields, ArticleSortField, ArticleType, ArticleView,
} from '@/entities/article';
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
            view: localStorage.getItem(ARTICLES_VIEW) as ArticleView,
            sort: ArticleSortField.VIEWS,
            order: 'asc',
            search: '',
            type: ArticleType.ALL,
            _inited: false,
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
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action: PayloadAction<ArticleOrderFields>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
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
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const ArticlesActions = articlesSlice.actions;
export const ArticlesReducer = articlesSlice.reducer;
