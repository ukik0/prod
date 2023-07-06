import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/helprers/classnames';
import { Anchor } from '@/shared/ui/Anchor/Anchor';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Typography';

import { SidebarItemProps } from '../../model/items';

import cl from './sidebar-item.module.scss';

export const SidebarItem = memo(({
    path, icon, text, isCollapsed,
}: SidebarItemProps & { isCollapsed: boolean }) => {
    const { t } = useTranslation();

    return (
        <Anchor className={cl.item} to={path} theme="secondary">
            <Icon name={icon} className={cl.icon} />
            <Typography variant="text" className={clsx({ cls: cl.link, mods: { [cl.collapsed]: isCollapsed } })}>{t(`${text}`)}</Typography>
        </Anchor>
    );
});
