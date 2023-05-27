import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <>
            {t('Главная')}
        </>
    );
};

export default MainPage;
