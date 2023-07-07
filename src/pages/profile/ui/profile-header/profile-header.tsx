import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ProfileActions, updateProfile } from '@/entities/profile';
import * as model from '@/entities/profile/model/selectors';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/Typography';

import cl from './profile-header.module.scss';

export const ProfileHeader = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const readonly = useSelector(model.getProfileReadonly);

    const handleEditClick = useCallback(() => {
        dispatch(ProfileActions.setReadonly(false));
    }, [dispatch]);

    const handleCancelEdit = useCallback(() => {
        dispatch(ProfileActions.cancelEdit());
    }, [dispatch]);

    const handleSaveClick = useCallback(() => {
        dispatch(updateProfile());
    }, [dispatch]);

    return (
        <div className={cl.header}>
            <Typography variant="title-1">
                {t('Профиль')}
            </Typography>
            {readonly ? (
                <Button theme="outline" size="M" onClick={handleEditClick}>
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button theme="outline" size="M" onClick={handleCancelEdit}>
                        {t('Отменить')}
                    </Button>
                    <Button theme="background" size="M" onClick={handleSaveClick}>
                        {t('Сохранить')}
                    </Button>
                </>
            )}
        </div>
    );
};
