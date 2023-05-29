import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginModal } from '@/features/AuthByUsername';
import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import { Button } from '@/shared/ui/Button';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const closeModalHandler = () => {
        setIsOpen(false);
    };

    const showModalHandler = () => {
        setIsOpen(true);
    };

    return (
        <div className={clsx({ cls: cl.Navbar, additional: [className] })}>
            <Button size="M" onClick={showModalHandler} theme="clearInverted" className={cl.links}>
                {t('Войти')}
            </Button>

            <LoginModal isOpen={isOpen} onClose={closeModalHandler} />
        </div>
    );
};
