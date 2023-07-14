import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ArticleList, ArticleView } from '@/entities/article';
import { SwitchArticleView } from '@/features/switch-article-view';
import { fetchArticles, fetchNextPage } from '@/pages/articles';
import { DynamicModuleLoader, Reducers } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { useInitialEffect } from '@/shared/lib/hooks';
import { Paper } from '@/widgets/paper';

import * as model from '../model/selectors';
import { ArticlesActions, ArticlesReducer, getArticles } from '../model/slice/articles';

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
    const isInit = useSelector(model.getArticlesInit);

    const dispatch = useDispatch();

    const handleSwitchView = (view: ArticleView) => {
        dispatch(ArticlesActions.setView(view));
    };

    const onScrollEnd = () => {
        dispatch(fetchNextPage());
    };

    useInitialEffect(() => {
        if (!isInit) {
            dispatch(ArticlesActions.initState());
            dispatch(fetchArticles({ page: 1 }));
        }
    });

    return (
        <DynamicModuleLoader reducers={INITIAL_REDUCER} removeAfterUnmount={false}>
            <Paper onScrollEnd={onScrollEnd} className={clsx({ cls: cl.Articles, additional: [className] })}>
                <SwitchArticleView view={view} onSwitch={handleSwitchView} />
                <ArticleList view={view} articles={articles} isLoading={isLoading} />
            </Paper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
