import { memo } from 'react';

import { ArticleView } from '@/entities/article';
import { clsx } from '@/shared/lib/helprers/classnames';
import { Card } from '@/shared/ui/card';
import { Skeleton } from '@/shared/ui/skeleton';

import cl from './article-list-item.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    ({ view, className }: ArticleListItemSkeletonProps) => {
        if (view === ArticleView.BIG) {
            return (
                <div
                    className={clsx({ cls: cl.ArticleListItem, additional: [className, cl[view]] })}
                >
                    <Card className={cl.card}>
                        <div className={cl.header}>
                            <Skeleton radius="50%" height={30} width={30} />
                            <Skeleton
                                width={150}
                                height={16}
                                className={cl.username}
                            />
                            <Skeleton
                                width={150}
                                height={16}
                                className={cl.date}
                            />
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                            className={cl.title}
                        />
                        <Skeleton height={200} className={cl.img} />
                        <div className={cl.footer}>
                            <Skeleton height={36} width={200} />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div
                className={clsx({ cls: cl.ArticleListItem, additional: [className, cl[view]] })}
            >
                <Card className={cl.card}>
                    <div className={cl.imageWrapper}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={cl.img}
                        />
                    </div>
                    <div className={cl.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton width={150} height={16} className={cl.title} />
                </Card>
            </div>
        );
    },
);
