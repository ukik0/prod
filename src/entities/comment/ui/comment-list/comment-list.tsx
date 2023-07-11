import { memo } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { Typography } from '@/shared/ui/Typography';

import { Comment } from '../../model/types';
import { CommentCard } from '../comment-card/comment-card';

import cl from './comment-list.module.scss';

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    if (!comments?.length) return <EmptyComments />;

    return (
        <div className={clsx({ cls: cl.CommentList, additional: [className] })}>
            {comments.map((comment) => <CommentCard className={cl.comment} comment={comment} isLoading={isLoading} />)}
        </div>
    );
});

function EmptyComments() {
    return (
        <div className={clsx({ cls: cl.CommentList })}>
            <Typography variant="title-1">Комментарии Отсутствуют</Typography>
        </div>
    );
}
