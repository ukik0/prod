import { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    ArticleOrderFields, ArticleSortField, ArticleType, ArticleView,
} from '@/entities/article';
import { ArticleTypeTabs } from '@/features/article-type-tabs';
import { SortArticles } from '@/features/sort-articles';
import { SwitchArticleView } from '@/features/switch-article-view';
import { fetchArticles } from '@/pages/articles';
import * as model from '@/pages/articles/model/selectors';
import { ArticlesActions } from '@/pages/articles/model/slice/articles';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { useDebounce } from '@/shared/lib/hooks';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/card';
import { TabItem } from '@/shared/ui/tabs';

import cl from './articles-filters.module.scss';

interface ArticlesFiltersProps {
    className?: string
}

export const ArticlesFilters = memo(({ className }: ArticlesFiltersProps) => {
    const view = useSelector(model.getArticlesView);
    const order = useSelector(model.getArticlesOrder);
    const sort = useSelector(model.getArticlesSort);
    const search = useSelector(model.getArticlesSearch);
    const type = useSelector(model.getArticleType);

    const debouncedSearch = useDebounce(search, 500);

    const dispatch = useDispatch();

    const handleSwitchView = (view: ArticleView) => {
        dispatch(ArticlesActions.setView(view));
    };

    const handleChangeSort = useCallback((value: ArticleSortField) => {
        dispatch(ArticlesActions.setSort(value));
        dispatch(ArticlesActions.setPage(1));
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const handleChangeOrder = useCallback((value: ArticleOrderFields) => {
        dispatch(ArticlesActions.setOrder(value));
        dispatch(ArticlesActions.setPage(1));
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const handleChangeSearch = useCallback((value: string) => {
        dispatch(ArticlesActions.setSearch(value));
        dispatch(ArticlesActions.setPage(1));
    }, [dispatch]);

    const handleTabClick = useCallback((tab: TabItem<ArticleType>) => {
        dispatch(ArticlesActions.setType(tab.value));
        dispatch(ArticlesActions.setPage(1));
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch, debouncedSearch]);

    return (
        <div className={clsx({ cls: cl.ArticlesFilters, additional: [className] })}>
            <div className={cl.sort}>
                <SortArticles
                    sort={sort}
                    order={order}
                    onChangeSort={handleChangeSort}
                    onChangeOrder={handleChangeOrder}
                />
                <SwitchArticleView view={view} onSwitch={handleSwitchView} />
            </div>

            <Card>
                <Input
                    value={search}
                    onChange={handleChangeSearch}
                    placeholder="Найти статью"
                    className={cl.search}
                />
            </Card>
            <ArticleTypeTabs
                type={type}
                handleTabClick={handleTabClick}
            />
        </div>
    );
});
