import { useTranslation } from 'react-i18next';

import { RoutePaths } from '@/shared/config/routesConfig/routesConfig';
import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import { Anchor } from '@/shared/ui/Anchor/Anchor';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();

    return (
        <div className={clsx({ cls: cl.Navbar, additional: [className] })}>
            <div className={cl.links}>
                /
            </div>
        </div>
    );
};
