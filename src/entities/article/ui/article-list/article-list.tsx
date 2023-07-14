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

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            className={cl.card}
            key={index}
            view={view}
        />
    ));

export const ArticleList = memo(({
    className, articles, view = ArticleView.SMALL, isLoading,
}: ArticleListProps) => {
    const renderArticle = (article: Article) => {
        return <ArticleListItem key={article.id} article={article} view={view} />;
    };

    return (
        <div className={clsx({ cls: cl.ArticleList, additional: [className, cl[view]] })}>
            {articles.map(renderArticle)}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
