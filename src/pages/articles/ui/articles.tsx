import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ArticleList, ArticleView } from '@/entities/article';
import { SwitchArticleView } from '@/features/switch-article-view';
import { fetchArticles } from '@/pages/articles';
import { DynamicModuleLoader, Reducers } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { useInitialEffect } from '@/shared/lib/hooks';

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
    const error = useSelector(model.getArticlesError);
    const view = useSelector(model.getArticlesView);

    const dispatch = useDispatch();

    const handleSwitchView = (view: ArticleView) => {
        dispatch(ArticlesActions.setView(view));
    };

    useInitialEffect(() => {
        dispatch(fetchArticles());
    });

    return (
        <DynamicModuleLoader reducers={INITIAL_REDUCER} removeAfterUnmount>
            <div className={clsx({ cls: cl.Articles, additional: [className] })}>
                <SwitchArticleView view={view} onSwitch={handleSwitchView} />
                <ArticleList view={view} articles={articles} isLoading={isLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
