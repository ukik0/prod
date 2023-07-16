import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/Store/config/Schema';
import { Article, ArticleType } from '@/entities/article';
import { setQueryParams } from '@/shared/lib/helprers';

import * as model from '../../selectors';

interface fetchArticleProps {
    replace?: boolean,
}

export const fetchArticles = createAsyncThunk<Article[], fetchArticleProps, ThunkConfig<string>>(
    'article/fetch-articles',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const limit = model.getArticlesLimit(getState());
        const page = model.getArticlesPage(getState());
        const order = model.getArticlesOrder(getState());
        const sort = model.getArticlesSort(getState());
        const search = model.getArticlesSearch(getState());
        const type = model.getArticleType(getState());

        const params = {
            _limit: limit,
            _page: page,
            _order: order,
            _sort: sort,
            q: search,
            type: type === ArticleType.ALL ? undefined : type,
        } as const;

        setQueryParams({
            sort, order, search, type,
        });

        try {
            const response = await extra.api.get<Article[]>(
                '/articles',
                {
                    params:
                        {
                            _expand: 'user',
                            ...params,
                        },
                },
            );

            if (!response.data) {
                throw new Error('Error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Ошибка получения статей');
        }
    },
);
