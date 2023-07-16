import { memo } from 'react';

import { ArticleType } from '@/entities/article';
import { TabItem, Tabs } from '@/shared/ui/tabs';

import cl from './article-type-tabs.module.scss';

interface ArticleTypeTabsProps {
    className?: string
    type: ArticleType
    handleTabClick: (tab: TabItem<ArticleType>) => void
}

const TAB_ITEMS: TabItem<ArticleType>[] = [
    {
        value: ArticleType.ALL,
        content: 'Все',
    },
    {
        value: ArticleType.IT,
        content: 'IT',
    },
    {
        value: ArticleType.SCIENCE,
        content: 'Наука',
    },
    {
        value: ArticleType.ECONOMICS,
        content: 'Экономика',
    },
];

export const ArticleTypeTabs = memo(({ className, handleTabClick, type }: ArticleTypeTabsProps) => {
    return (
        <Tabs
            tabs={TAB_ITEMS}
            value={type}
            onClickTab={handleTabClick}
            className={cl.tabs}
        />
    );
});
