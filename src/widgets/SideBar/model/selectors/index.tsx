import { createSelector } from '@reduxjs/toolkit';

import { getUserData } from '@/entities/user/model/selectors';
import { RoutePaths } from '@/shared/config/routesConfig/routesConfig';

import { SidebarItemProps } from '../types';

export const getSidebarList = createSelector(getUserData, (user) => {
    const list: SidebarItemProps[] = [
        {
            path: RoutePaths.main,
            text: 'Главная',
            icon: 'sidebar/home',
        },
        {
            path: RoutePaths.about,
            text: 'О сайте',
            icon: 'sidebar/about',
        },
    ];

    if (user) {
        list.push(
            {
                path: `${RoutePaths.profile}/${user.id}`,
                text: 'Профиль',
                icon: 'sidebar/profile',
                authOnly: true,
            },
            {
                path: RoutePaths.articles,
                text: 'Статьи',
                icon: 'sidebar/articles',
                authOnly: true,
            },
        );
    }

    return list;
});
