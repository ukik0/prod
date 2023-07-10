import { memo } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames/classNames';

import cl from './article-details.module.scss';

interface ArticleDetailsProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsProps) => {
    return (
        <div className={clsx({ cls: cl.ArticleDetails, additional: [className] })}>
            ArticleDetails
        </div>
    );
};

export default memo(ArticleDetailsPage);
