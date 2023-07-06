import { memo, useState } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames';
import { Button } from '@/shared/ui/Button';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { SidebarItems } from '@/widgets/SideBar/model/items';
import { SidebarItem } from '@/widgets/SideBar/ui/sidebar-item/sidebar-item';

import cl from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const handleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
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
                {SidebarItems.map((item) => (
                    <SidebarItem key={item.text} isCollapsed={collapsed} {...item} />
                ))}
            </div>
            <div className={cl.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </div>
        </div>
    );
});
