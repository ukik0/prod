import { useTranslation } from 'react-i18next';

import { Countries, CountrySelect } from '@/entities/country';
import { CurrencySelect, Currency } from '@/entities/currency';
import { Profile } from '@/entities/profile';
import { clsx } from '@/shared/lib/helprers/classnames';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Typography } from '@/shared/ui/Typography';
import { Avatar } from '@/shared/ui/avatar';

import cl from './profile-card.module.scss';

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Countries) => void;
}

export const ProfileCard = (props :ProfileCardProps) => {
    const {
        className, data, error, isLoading, readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props;

    const { t } = useTranslation();

    if (isLoading) return <Loading />;

    if (error) return <Error />;

    return (
        <div className={clsx({ cls: cl.profile, additional: [className], mods: { [cl.editing]: !readonly } })}>
            {data?.avatar && <Avatar src={data.avatar} />}
            <div className={cl.data}>
                <Input readOnly={readonly} onChange={onChangeFirstname} value={data?.first} placeholder={t('Ваше имя')} className={cl.input} />
                <Input readOnly={readonly} onChange={onChangeLastname} value={data?.lastname} placeholder={t('Ваше фамилия')} className={cl.input} />
                <Input readOnly={readonly} onChange={onChangeAge} value={String(data?.age)} placeholder={t('Ваш возраст')} className={cl.input} />
                <Input readOnly={readonly} onChange={onChangeCity} value={data?.city} placeholder={t('Ваш город')} className={cl.input} />
                <Input readOnly={readonly} onChange={onChangeUsername} value={data?.username} placeholder={t('Ваше имя пользователя')} className={cl.input} />
                <Input readOnly={readonly} onChange={onChangeAvatar} value={data?.avatar} placeholder={t('Введите ссылку на аватар')} className={cl.input} />
                <CurrencySelect readonly={readonly} value={data?.currency} onChange={onChangeCurrency} />
                <CountrySelect readonly={readonly} value={data?.country} onChange={onChangeCountry} />
            </div>
        </div>
    );
};

function Error() {
    const { t } = useTranslation();

    return (
        <div className={clsx({ cls: cl.profile, additional: [cl.error] })}>
            <Typography variant="error">
                {t('Произошла непредвиденная ошибка')}
            </Typography>
        </div>
    );
}

function Loading() {
    return (
        <div className={clsx({ cls: cl.profile, additional: [cl.loading] })}>
            <Loader />
        </div>
    );
}
