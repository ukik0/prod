import { useState } from 'react';
import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import cl from './SideBar.module.scss';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher/ui/LanguageSwitcher';

interface SideBarProps {
    className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const handleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={clsx({ cls: cl.SideBar, mods: { [cl.collapsed]: collapsed }, additional: [className] })}>
            <button type="button" onClick={handleCollapse}>toggle</button>
            <div className={cl.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
