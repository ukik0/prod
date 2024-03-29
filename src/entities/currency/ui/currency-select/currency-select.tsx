import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from '@/shared/ui/select';

import { Currency } from '../../model/types';

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

interface CurrencySelectProps {
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

export const CurrencySelect = memo(({ value = Currency.RUB, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
