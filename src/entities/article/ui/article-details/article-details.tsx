import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
    ArticleBlock, ArticleBlockType, Blocks, fetchArticle,
} from '@/entities/article';
import * as model from '@/entities/article/model/selectors';
import { ArticleDetailsReducer } from '@/entities/article/model/slice/article-details';
import { fetchComments } from '@/pages/article-details/model/actions/fetch-comments/fetch-comments';
import { DynamicModuleLoader, Reducers } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Typography';
import { Avatar } from '@/shared/ui/avatar';
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

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <Blocks.CodeBlock key={block.id} className={cl.blocks} block={block} />;
        case ArticleBlockType.IMAGE:
            return <Blocks.ImageBlock key={block.id} className={cl.blocks} block={block} />;
        case ArticleBlockType.TEXT:
            return <Blocks.TextBlock key={block.id} className={cl.blocks} block={block} />;
        }
    }, []);

    let content;

    useInitialEffect(() => {
        dispatch(fetchArticle(id));
    });

    if (isLoading) {
        content = <IsLoading />;
    } else if (error) {
        content = <Error />;
    } else {
        content = (
            <>
                <Avatar src={article?.img} size={100} className={cl.avatar} />
                <Typography variant="title-1">
                    {article?.title}
                </Typography>
                <Typography variant="title-2">
                    {article?.subtitle}
                </Typography>
                <div>
                    <Icon name="shared/eye" />
                    <Typography variant="title-2">
                        {article?.views}
                    </Typography>
                </div>
                <div>
                    <Icon name="shared/calendar" />
                    <Typography variant="title-2">
                        {article?.createdAt}
                    </Typography>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={INITIAL_REDUCER} removeAfterUnmount>
            <div className={clsx({ cls: cl.ArticleDetails, additional: [className] })}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

function IsLoading() {
    return (
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
}

function Error() {
    return (
        <div className={clsx({ cls: cl.ArticleDetails })}>
            <Typography variant="error">
                Ошибка при загрузке статьи
            </Typography>
        </div>
    );
}
