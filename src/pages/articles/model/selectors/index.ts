import { StateSchema } from '@/app/providers/Store';
import { ArticleSortField, ArticleType } from '@/entities/article';

export const getArticlesView = (state: StateSchema) => state.articles?.view;
export const getArticlesIsLoading = (state: StateSchema) => state.articles?.isLoading ?? false;
export const getArticlesError = (state: StateSchema) => state.articles?.error;
export const getArticlesPage = (state: StateSchema) => state.articles?.page ?? 1;
export const getArticlesLimit = (state: StateSchema) => state.articles?.limit ?? 9;
export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore;
export const getArticlesInit = (state: StateSchema) => state.articles?._inited;
export const getArticlesSort = (state: StateSchema) => state.articles?.sort ?? ArticleSortField.VIEWS;
export const getArticlesOrder = (state: StateSchema) => state.articles?.order ?? 'asc';
export const getArticlesSearch = (state: StateSchema) => state.articles?.search ?? '';
export const getArticleType = (state: StateSchema) => state.articles?.type ?? ArticleType.ALL;
