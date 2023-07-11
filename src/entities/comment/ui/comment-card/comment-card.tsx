import { memo } from 'react';

import { RoutePaths } from '@/shared/config/routesConfig/routesConfig';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { Anchor } from '@/shared/ui/Anchor/Anchor';
import { Typography } from '@/shared/ui/Typography';
import { Avatar } from '@/shared/ui/avatar';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';

import { Comment } from '../../model/types';

import cl from './comment-card.module.scss';

interface CommentCardProps {
    className?: string
    comment: Comment
    isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) return <IsLoading />;

    return (
        <div className={clsx({ cls: cl.CommentCard, additional: [className] })}>
            <Anchor className={cl.header} to={`${RoutePaths.profile}/${comment.user.id}`}>
                {comment.user.avatar && (
                    <Avatar size={30} src={comment.user.avatar} />
                ) }
                <Typography className={cl.username} variant="text">
                    {comment.user.username}
                </Typography>
            </Anchor>
            <Typography variant="text">
                {comment.text}
            </Typography>
        </div>
    );
});

function IsLoading() {
    return (
        <div className={clsx({ cls: cl.CommentCard, additional: [cl.isLoading] })}>
            <div className={cl.header}>
                <Skeleton width={30} height={30} radius="50%" />
                <Skeleton
                    height={16}
                    width={100}
                    className={cl.username}
                />
            </div>
            <Skeleton className={cl.text} width="100%" height={50} />
        </div>
    );
}
