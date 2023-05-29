import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RoutePaths } from '@/shared/config/routesConfig/routesConfig';
import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import { Anchor } from '@/shared/ui/Anchor/Anchor';
import { Button } from '@/shared/ui/Button';
import { Icons } from '@/shared/ui/Icons';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { Typography } from '@/shared/ui/Typography';

import cl from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
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
            <Items />
            <div className={cl.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </div>
        </div>
    );
};

function Items() {
    const { t } = useTranslation();

    return (
        <div className={cl.items}>
            <div>
                <Anchor className={cl.item} to={RoutePaths.main} theme="secondary">
                    <Icons.Home className={cl.icon} />
                    <Typography variant="text" className={cl.link}>{t('Главная')}</Typography>
                </Anchor>
            </div>
            <div>
                <Anchor className={cl.item} to={RoutePaths.about} theme="secondary">
                    <Icons.About className={cl.icon} />
                    <Typography variant="text" className={cl.link}>{t('О нас')}</Typography>
                </Anchor>
            </div>
        </div>
    );
}
