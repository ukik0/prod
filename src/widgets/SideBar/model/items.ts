import { RoutePaths } from '@/shared/config/routesConfig/routesConfig';
import { IconProps } from '@/shared/ui/Icon';

export interface SidebarItemProps {
    path: string
    icon: IconProps['name']
    text: string
    authOnly?: boolean
}

export const SidebarItems: SidebarItemProps[] = [
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
    {
        path: RoutePaths.profile,
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
];
