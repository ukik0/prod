import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserData } from '@/entities/user/model/selectors';
import { clsx } from '@/shared/lib/helprers/classnames';
import { Anchor } from '@/shared/ui/Anchor/Anchor';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Typography';

import { SidebarItemProps } from '../../model/items';

import cl from './sidebar-item.module.scss';

export const SidebarItem = memo(({
    path, icon, text, isCollapsed, authOnly,
}: SidebarItemProps & { isCollapsed: boolean }) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserData);

    if (authOnly && !isAuth) {
        return null;
    }

    return (
        <Anchor className={cl.item} to={path} theme="secondary">
            <Icon name={icon} className={cl.icon} />
            <Typography variant="text" className={clsx({ cls: cl.link, mods: { [cl.collapsed]: isCollapsed } })}>{t(`${text}`)}</Typography>
        </Anchor>
    );
});
