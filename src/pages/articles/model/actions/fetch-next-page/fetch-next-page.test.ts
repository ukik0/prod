import { fetchNextPage } from '@/pages/articles';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk';

import { fetchArticles } from '../fetch-articles/fetch-articles';

jest.mock('../fetch-articles/fetch-articles');

describe('fetch-next-page', () => {
    test('fetch articles called', async () => {
        const thunk = new TestAsyncThunk(fetchNextPage, {
            articles: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticles).toHaveBeenCalledWith({ page: 3 });
        expect(fetchArticles).toHaveBeenCalled();
    });
    test('fetch-articles not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextPage, {
            articles: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticles).not.toHaveBeenCalled();
    });
    test('fetch-articles not called if loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextPage, {
            articles: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticles).not.toHaveBeenCalled();
    });
});
