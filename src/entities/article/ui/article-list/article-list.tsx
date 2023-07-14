import { memo } from 'react';

import { Article, ArticleView } from '@/entities/article';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';

import { ArticleListItem } from '../article-list-item/article-list-item';
import { ArticleListItemSkeleton } from '../article-list-item/article-list-item-skeleton';

import cl from './article-list.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view?: ArticleView;
}

export const ArticleList = memo(({
    className, articles, view = ArticleView.SMALL, isLoading,
}: ArticleListProps) => {
    if (!articles.length) return null;

    const renderArticle = (article: Article) => {
        return <ArticleListItem key={article.id} article={article} view={view} />;
    };

    if (isLoading) return (<div className={clsx({ cls: cl.ArticleList, additional: [className, cl[view]] })}>{Array.from({ length: view === ArticleView.SMALL ? 12 : 3 }, (_, index) => <ArticleListItemSkeleton key={index} view={view} />)}</div>);

    return (
        <div className={clsx({ cls: cl.ArticleList, additional: [className, cl[view]] })}>
            {articles.map(renderArticle)}
        </div>
    );
});
