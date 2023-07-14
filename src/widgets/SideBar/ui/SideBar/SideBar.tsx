import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { clsx } from '@/shared/lib/helprers/classnames';
import { Button } from '@/shared/ui/Button';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { SidebarItem } from '@/widgets/SideBar/ui/sidebar-item/sidebar-item';

import { getSidebarList } from '../../model/selectors';

import cl from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const sidebarItems = useSelector(getSidebarList);

    const handleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            data-testid="SideBar"
            className={clsx({ cls: cl.SideBar, mods: { [cl.collapsed]: collapsed }, additional: [className] })}
        >
            <Button
                square
                size="L"
                theme="backgroundInverted"
                data-testid="toggle"
                type="button"
                onClick={handleCollapse}
                className={cl.collapsedButton}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cl.items}>
                {sidebarItems.map((item) => (
                    <SidebarItem key={item.text} isCollapsed={collapsed} {...item} />
                ))}
            </div>
            <div className={cl.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </div>
        </aside>
    );
});
