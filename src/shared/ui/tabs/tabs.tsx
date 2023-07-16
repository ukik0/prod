import { ReactNode, useCallback } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { Card } from '@/shared/ui/card';

import cl from './tabs.module.scss';

export type TabItem<T> = {
    value: T
    content: ReactNode
}

interface TabsProps<T> {
    className?: string
    tabs: TabItem<T>[]
    value: T
    onClickTab: (tab: TabItem<T>) => void
}

export const Tabs = <T extends string >({
    className, tabs, onClickTab, value,
}: TabsProps<T>) => {
    const handleClickTab = useCallback((tab: TabItem<T>) => () => {
        onClickTab(tab);
    }, [onClickTab]);

    return (
        <div className={clsx({ cls: cl.Tabs, additional: [className] })}>
            {tabs.map((tab) => (
                <Card
                    className={clsx({ cls: cl.tab, mods: { [cl.active]: value === tab.value } })}
                    key={tab.value}
                    onClick={handleClickTab(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
