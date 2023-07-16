import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ArticleList } from '@/entities/article';
import { fetchArticles, fetchNextPage } from '@/pages/articles';
import { initPage } from '@/pages/articles/model/actions/init-page/init-page';
import { DynamicModuleLoader, Reducers } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { useInitialEffect } from '@/shared/lib/hooks';
import { Typography } from '@/shared/ui/Typography';
import { Paper } from '@/widgets/paper';

import * as model from '../model/selectors';
import { ArticlesActions, ArticlesReducer, getArticles } from '../model/slice/articles';

import { ArticlesFilters } from './articles-filters/articles-filters';
import cl from './articles.module.scss';

interface ArticlesProps {
  className?: string;
}

const INITIAL_REDUCER: Reducers = {
    articles: ArticlesReducer,
};

const ArticlesPage = ({ className }: ArticlesProps) => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(model.getArticlesIsLoading);
    const view = useSelector(model.getArticlesView);

    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();

    const onScrollEnd = () => {
        dispatch(fetchNextPage());
    };

    useInitialEffect(() => {
        dispatch(initPage({ searchParams }));
    });

    return (
        <DynamicModuleLoader reducers={INITIAL_REDUCER} removeAfterUnmount={false}>
            <Paper onScrollEnd={onScrollEnd} className={clsx({ cls: cl.Articles, additional: [className] })}>
                <ArticlesFilters />
                <ArticleList view={view} articles={articles} isLoading={isLoading} className={cl.list} />
            </Paper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
