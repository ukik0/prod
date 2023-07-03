import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '@/entities/User';
import { getUserData } from '@/entities/User/model/selectors';
import { LoginModal } from '@/features/AuthByUsername';
import { clsx } from '@/shared/lib/helprers/classNames';
import { Button } from '@/shared/ui/Button';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const authData = useSelector(getUserData);

    const closeModalHandler = useCallback(() => {
        setIsOpen(false);
    }, []);

    const showModalHandler = useCallback(() => {
        setIsOpen(true);
    }, []);

    useEffect(() => {
        return () => {
            if (!authData) setIsOpen(false);
        };
    }, [authData]);

    if (authData) return <AuthNavbar />;

    return (
        <div className={clsx({ cls: cl.Navbar, additional: [className] })}>
            <Button size="M" onClick={showModalHandler} theme="clearInverted" className={cl.links}>
                {t('Войти')}
            </Button>

            {isOpen && <LoginModal isOpen={isOpen} onClose={closeModalHandler} />}
        </div>
    );
};

function AuthNavbar() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userActions.logout());
    };

    return (
        <div className={clsx({ cls: cl.Navbar })}>
            <Button size="M" onClick={handleLogout} theme="clearInverted" className={cl.links}>
                {t('Выйти')}
            </Button>
        </div>
    );
}
