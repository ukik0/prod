import {
    memo, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '@/entities/user';
import { getUserData } from '@/entities/user/model/selectors';
import { LoginModal } from '@/features/auth/by-username';
import { clsx } from '@/shared/lib/helprers/classnames';
import { Button } from '@/shared/ui/Button';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
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
        <header className={clsx({ cls: cl.Navbar, additional: [className] })}>
            <Button size="M" onClick={showModalHandler} theme="clearInverted" className={cl.links}>
                {t('Войти')}
            </Button>

            {isOpen && <LoginModal isOpen={isOpen} onClose={closeModalHandler} />}
        </header>
    );
});

function AuthNavbar() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userActions.logout());
    };

    return (
        <header className={clsx({ cls: cl.Navbar })}>
            <Button size="M" onClick={handleLogout} theme="clearInverted" className={cl.links}>
                {t('Выйти')}
            </Button>
        </header>
    );
}
