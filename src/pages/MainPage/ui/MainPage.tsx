import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState<string>('');

    const changeHandler = (value: string) => {
        setValue(value);
    };

    return (
        <>
            {t('Главная')}
        </>
    );
};

export default memo(MainPage);
