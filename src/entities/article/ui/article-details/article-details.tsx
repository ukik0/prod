import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchArticle } from '@/entities/article';
import * as model from '@/entities/article/model/selectors';
import { ArticleDetailsReducer } from '@/entities/article/model/slice/article-details';
import { DynamicModuleLoader, Reducers } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Typography } from '@/shared/ui/Typography';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';

import cl from './article-details.module.scss';

interface ArticleDetailsProps {
    className?: string
    id: string
}

const INITIAL_REDUCER: Reducers = {
    articleDetails: ArticleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();

    const isLoading = useSelector(model.getArticleDetailsIsLoading);
    const article = useSelector(model.getArticleDetailsData);
    const error = useSelector(model.getArticleDetailsError);

    let content;

    useEffect(() => {
        dispatch(fetchArticle(id));
    }, [id, dispatch]);

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    width={200}
                    height={200}
                    radius="50%"
                />
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = <Typography variant="error">Ошибка при загрузке статьи</Typography>;
    } else {
        content = article?.title;
    }

    return (
        <DynamicModuleLoader reducers={INITIAL_REDUCER} removeAfterUnmount>
            <div className={clsx({ cls: cl.ArticleDetails, additional: [className] })}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
