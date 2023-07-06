import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileReducer } from '@/entities/profile';
import { DynamicModuleLoader, Reducers } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const INITIAL_REDUCER: Reducers = {
    profile: ProfileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('');

    return (
        <DynamicModuleLoader reducers={INITIAL_REDUCER} removeAfterUnmount>
            <div>
                profile page
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ProfilePage);
