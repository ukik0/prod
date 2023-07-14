import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Paper } from '@/widgets/paper';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Paper>
            {t('О сайте')}
        </Paper>
    );
};

export default memo(AboutPage);
