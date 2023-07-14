import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView, Blocks,
} from '@/entities/article';
import { RoutePaths } from '@/shared/config/routesConfig/routesConfig';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { useHover } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Typography';
import { Avatar } from '@/shared/ui/avatar';
import { Card } from '@/shared/ui/card';

import cl from './article-list-item.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
    const [isHover, bindingHover] = useHover();

    const navigate = useNavigate();

    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
    const types = (
        <Typography variant="text" className={cl.types} tag="p">
            {article.type.join(',')}
        </Typography>
    );
    const views = (
        <>
            <Typography variant="text" className={cl.views}>
                {article.views}
            </Typography>
            <Icon name="shared/eye" />
        </>
    );

    const handleNavigate = () => {
        navigate(`${RoutePaths.articles}/${article.id}`);
    };

    if (view === ArticleView.BIG) {
        return (
            <div className={clsx({ cls: cl.ArticleListItem, additional: [className, cl[view]] })}>
                <Card>
                    <div className={cl.header}>
                        {article.user?.avatar && <Avatar size={30} src={article.user.avatar} />}

                        {article.user?.username && (
                            <Typography variant="text" className={cl.usernmae}>
                                {article.user.username}
                            </Typography>
                        )}

                        <Typography variant="text" className={cl.date}>
                            {article.createdAt}
                        </Typography>
                    </div>

                    <Typography variant="text" className={cl.title}>
                        {article.title}
                    </Typography>

                    {types}

                    <img src={article.img} alt={article.title} className={cl.img} />

                    <Blocks.TextBlock block={textBlock} className={cl.textBlock} />

                    <div className={cl.footer}>
                        <Button onClick={handleNavigate}>
                            Читать далее
                        </Button>

                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div onClick={handleNavigate} {...bindingHover} className={clsx({ cls: cl.ArticleListItem, additional: [className, cl[view]] })}>
            <Card>
                <div className={cl.image}>
                    <img src={article.img} alt={article.title} />
                    <Typography variant="text" className={cl.date}>
                        {article.createdAt}
                    </Typography>
                </div>

                <div className={cl.info}>
                    {types}
                    {views}
                </div>

                <Typography variant="text" className={cl.title}>
                    {article.title}
                </Typography>
            </Card>
        </div>
    );
});
