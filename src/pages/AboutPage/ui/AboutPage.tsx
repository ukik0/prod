import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <>
            {t('О сайте')}
        </>
    );
};

export default memo(AboutPage);
