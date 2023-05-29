import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { clsx } from '@/shared/lib/helprers/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Typography } from '@/shared/ui/Typography';

import { loginByUsername } from '../../model/actions/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors';
import { loginActions } from '../../model/slice/loginSlice';

import cl from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={clsx({ cls: cl.LoginForm, additional: [className] })}>
            <Typography variant="title-1" tag="h2">{t('Форма авторизации')}</Typography>
            <Error />
            <UsernameInput />
            <ConfirmButton />
        </div>
    );
});

function Error() {
    const { t } = useTranslation();
    const { error } = useSelector(getLoginState);

    return (error && <Typography variant="error" tag="span">{t('Вы ввели неверный логин или пароль')}</Typography>);
}

function UsernameInput() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { username } = useSelector(getLoginState);

    const handleChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    return (
        <Input
            value={username}
            onChange={handleChangeUsername}
            autoFocus
            placeholder={t('Введите username')}
            className={cl.input}
        />
    );
}

function PasswordInput() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { password } = useSelector(getLoginState);

    const handleChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    return (
        <Input
            value={password}
            onChange={handleChangePassword}
            placeholder={t('Введите пароль')}
            className={cl.input}
        />
    );
}

function ConfirmButton() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { password, username, isLoading } = useSelector(getLoginState);

    const handleLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return <Button disabled={isLoading} onClick={handleLogin} className={cl.btn}>{t('Войти')}</Button>;
}
