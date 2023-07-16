import { EntityState } from '@reduxjs/toolkit';

import {
    Article, ArticleOrderFields, ArticleSortField, ArticleType, ArticleView,
} from '@/entities/article';

export interface ArticlesStateSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: ArticleOrderFields;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean;
}
