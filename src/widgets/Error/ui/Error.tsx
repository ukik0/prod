import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import { Button } from '@/shared/ui/Button';

import cl from './Error.module.scss';

interface ErrorProps {
    className?: string
}

export const Error = ({ className }: ErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={clsx({ cls: cl.Error, additional: [className] })}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
