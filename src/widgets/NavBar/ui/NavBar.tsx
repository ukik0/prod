import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const closeHandler = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={clsx({ cls: cl.Navbar, additional: [className] })}>
            <Button size="M" onClick={closeHandler} theme="clearInverted" className={cl.links}>
                {t('Войти')}
            </Button>

            <Modal isOpen={isOpen} onClose={closeHandler}>
                asdadaa
            </Modal>
        </div>
    );
};
