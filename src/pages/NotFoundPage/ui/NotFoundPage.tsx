import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Paper } from '@/widgets/paper';

import cl from './NotFoundPage.module.scss';

export const NotFoundPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Paper className={cl.page}>
            {t('Страница не найдена')}
        </Paper>
    );
});
