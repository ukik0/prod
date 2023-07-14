import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';
import { Article } from '@/entities/article';
import { fetchArticles } from '@/pages/articles';
import * as model from '@/pages/articles/model/selectors';
import { ArticlesActions } from '@/pages/articles/model/slice/articles';

export const fetchNextPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'article/fetch-next-page',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, getState, dispatch,
        } = thunkAPI;

        const limit = model.getArticlesLimit(getState());
        const hasMore = model.getArticlesHasMore(getState());
        const page = model.getArticlesPage(getState());
        const isLoading = model.getArticlesIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(ArticlesActions.setPage(page + 1));
            dispatch(fetchArticles({ page: page + 1 }));
        }
    },
);
