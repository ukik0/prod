import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ProfileActions, updateProfile } from '@/entities/profile';
import * as model from '@/entities/profile/model/selectors';
import { getProfileState } from '@/entities/profile/model/selectors';
import { getUserData } from '@/entities/user/model/selectors';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/Typography';

import cl from './profile-header.module.scss';

interface ProfileHeaderProps {
    id?: string
}

export const ProfileHeader = ({ id }: ProfileHeaderProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const readonly = useSelector(model.getProfileReadonly);
    const user = useSelector(getUserData);
    const profile = useSelector(getProfileState);

    const isEditable = user?.id === profile?.id;

    const handleEditClick = useCallback(() => {
        dispatch(ProfileActions.setReadonly(false));
    }, [dispatch]);

    const handleCancelEdit = useCallback(() => {
        dispatch(ProfileActions.cancelEdit());
    }, [dispatch]);

    const handleSaveClick = useCallback(() => {
        dispatch(updateProfile(id));
    }, [dispatch, id]);

    if (!isEditable) return null;

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
