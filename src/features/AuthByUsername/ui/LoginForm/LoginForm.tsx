import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import cl from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={clsx({ cls: cl.LoginForm, additional: [className] })}>
            <Input autoFocus placeholder={t('Введите username')} className={cl.input} />
            <Input placeholder={t('Введите пароль')} className={cl.input} />
            <Button className={cl.btn}>{t('Войти')}</Button>
        </div>
    );
};
