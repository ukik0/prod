import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { fetchProfile, ProfileCard, ProfileReducer } from '@/entities/profile';
import { DynamicModuleLoader, Reducers } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks';

const INITIAL_REDUCER: Reducers = {
    profile: ProfileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={INITIAL_REDUCER} removeAfterUnmount>
            <ProfileCard />
        </DynamicModuleLoader>
    );
};

export default memo(ProfilePage);
