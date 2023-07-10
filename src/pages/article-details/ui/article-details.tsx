import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/article';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';

import cl from './article-details.module.scss';

interface ArticleDetailsProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsProps) => {
    const { id } = useParams<{id: string}>();

    if (!id) return <Empty />;

    return (
        <div className={clsx({ cls: cl.ArticleDetails, additional: [className] })}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);

function Empty() {
    return (
        <div className={clsx({ cls: cl.ArticleDetails })}>
            Статья отсутствует
        </div>
    );
}
