import { IconProps } from '@/shared/ui/Icon';

export interface SidebarItemProps {
    path: string
    icon: IconProps['name']
    text: string
    authOnly?: boolean
}
