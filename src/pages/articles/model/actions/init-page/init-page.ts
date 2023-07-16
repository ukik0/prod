import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';
import { ArticleOrderFields, ArticleSortField, ArticleType } from '@/entities/article';
import { fetchArticles } from '@/pages/articles';
import * as model from '@/pages/articles/model/selectors';
import { ArticlesActions } from '@/pages/articles/model/slice/articles';
import { parseUrl } from '@/shared/lib/helprers';

interface initPageProps {
    searchParams: URLSearchParams
}

export const initPage = createAsyncThunk<void, initPageProps, ThunkConfig<string>>(
    'article/init-page',
    async ({ searchParams }, thunkAPI) => {
        const {
            rejectWithValue, extra, getState, dispatch,
        } = thunkAPI;

        const isInit = model.getArticlesInit(getState());

        if (!isInit) {
            const order = searchParams.get('order') as ArticleOrderFields;
            const sort = searchParams.get('sort') as ArticleSortField;
            const search = searchParams.get('search');
            const type = searchParams.get('type') as ArticleType;

            if (order) {
                dispatch(ArticlesActions.setOrder(order));
            }

            if (sort) {
                dispatch(ArticlesActions.setSort(sort));
            }

            if (search) {
                dispatch(ArticlesActions.setSearch(search));
            }

            if (type) {
                dispatch(ArticlesActions.setType(type));
            }

            dispatch(ArticlesActions.initState());
            dispatch(fetchArticles({}));
        }
    },
);
