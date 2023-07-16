import { memo, useMemo } from 'react';

import { ArticleOrderFields, ArticleSortField } from '@/entities/article';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { Select, SelectOption } from '@/shared/ui/select';

import cl from './sort-articles.module.scss';

interface SortArticlesProps {
    className?: string
    sort: ArticleSortField
    order: ArticleOrderFields
    onChangeSort: (sort: ArticleSortField) => void
    onChangeOrder: (order: ArticleOrderFields) => void
}

export const SortArticles = memo(({
    className, sort, order, onChangeSort, onChangeOrder,
}: SortArticlesProps) => {
    const orderOptions = useMemo<SelectOption<ArticleOrderFields>[]>(() => [
        {
            value: 'asc',
            content: 'Возрастанию',
        },
        {
            value: 'desc',
            content: 'Убыванию',
        },
    ], []);

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: 'Дата создания',
        },
        {
            value: ArticleSortField.TITLE,
            content: 'Названию',
        },
        {
            value: ArticleSortField.VIEWS,
            content: 'Просмотрам',
        },
    ], []);

    return (
        <div className={clsx({ cls: cl.SortArticles, additional: [className] })}>
            <Select
                value={sort}
                onChange={onChangeSort}
                label="Сортировка по"
                options={sortOptions}
            />
            <Select
                value={order}
                onChange={onChangeOrder}
                label="Сортировка по"
                options={orderOptions}
            />
        </div>
    );
});
