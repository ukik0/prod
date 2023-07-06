import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import * as model from '@/entities/profile/model/selectors';
import { clsx } from '@/shared/lib/helprers/classnames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Typography } from '@/shared/ui/Typography';

import cl from './profile-card.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }:ProfileCardProps) => {
    const { t } = useTranslation();

    const data = useSelector(model.getProfileState);
    const isLoading = useSelector(model.getProfileLoading);
    const error = useSelector(model.getProfileError);

    return (
        <div className={clsx({ cls: cl.profile, additional: [className] })}>
            <div className={cl.header}>
                <Typography variant="title-2">
                    {t('Профиль')}
                </Typography>
                <Button theme="outline" className={cl.edit}>
                    {t('Редактировать')}
                </Button>
            </div>

            <div className={cl.data}>
                <Input value={data?.username} placeholder={t('Ваше имя')} className={cl.input} />
                <Input value={data?.lastname} placeholder={t('Ваше фамилия')} className={cl.input} />
            </div>
        </div>
    );
};
