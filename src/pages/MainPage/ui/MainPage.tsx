import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Paper } from '@/widgets/paper';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState<string>('');

    const changeHandler = (value: string) => {
        setValue(value);
    };

    return (
        <Paper>
            {t('Главная')}
        </Paper>
    );
};

export default memo(MainPage);
