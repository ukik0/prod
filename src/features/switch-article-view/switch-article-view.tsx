import { memo } from 'react';

import { ArticleView } from '@/entities/article';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { SpriteKey } from '@/shared/ui/Icon/icon';

import cl from './switch-article-view.module.scss';

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: 'shared/tile',
    },
    {
        view: ArticleView.BIG,
        icon: 'shared/list',
    },
];

interface SwitchArticleViewProps {
    className?: string
    view?: ArticleView,
    onSwitch: (view: ArticleView) => void
}

export const SwitchArticleView = memo(({ className, onSwitch, view }: SwitchArticleViewProps) => {
    const handleSwitchView = (view: ArticleView) => () => {
        onSwitch(view);
    };

    return (
        <div className={clsx({ cls: cl.SwitchArticleView, additional: [className] })}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme="clear"
                    onClick={handleSwitchView(viewType.view)}
                >
                    <Icon
                        name={viewType.icon as SpriteKey}
                        className={clsx({ mods: { [cl.unselected]: viewType.view !== view } })}
                    />
                </Button>
            ))}
        </div>
    );
});
