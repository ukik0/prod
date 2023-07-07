import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from '@/shared/ui/select';

import { Countries } from '../../model/types';

const options = [
    { value: Countries.Russia, content: Countries.Russia },
    { value: Countries.Ukraine, content: Countries.Ukraine },
    { value: Countries.Armenia, content: Countries.Armenia },
    { value: Countries.Belarus, content: Countries.Belarus },
    { value: Countries.Kazakhstan, content: Countries.Kazakhstan },
];

interface CountrySelectProps {
    value?: Countries
    onChange?: (value: Countries) => void
    readonly?: boolean
}

export const CountrySelect = memo(({ value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Countries);
    }, [onChange]);

    return (
        <Select
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
