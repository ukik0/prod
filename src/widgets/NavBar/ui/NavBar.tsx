import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/helprers/classNames/classNames';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={clsx({ cls: cl.Navbar, additional: [className] })}>
            <div className={cl.links} />
        </div>
    );
};
