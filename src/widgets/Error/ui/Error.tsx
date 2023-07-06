import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/helprers/classnames';
import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/Typography';

import cl from './Error.module.scss';

interface ErrorProps {
    className?: string
}

export const Error = memo(({ className }: ErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={clsx({ cls: cl.Error, additional: [className] })}>
            <Typography variant="text">{t('Произошла непредвиденная ошибка')}</Typography>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
});
