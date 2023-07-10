import { memo } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames/classNames';

import cl from './articles.module.scss';

interface ArticlesProps {
    className?: string
}

const ArticlesPage = ({ className }: ArticlesProps) => {
    return (
        <div className={clsx({ cls: cl.Articles, additional: [className] })}>
            Articles
        </div>
    );
};

export default memo(ArticlesPage);
