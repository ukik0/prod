import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Countries } from '@/entities/country';
import { Currency } from '@/entities/currency/model/types';
import {
    fetchProfile, ProfileActions, ProfileCard, ProfileReducer,
} from '@/entities/profile';
import * as model from '@/entities/profile/model/selectors';
import { DynamicModuleLoader, Reducers } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks';
import { Paper } from '@/widgets/paper';

import { ProfileHeader } from './profile-header/profile-header';

const INITIAL_REDUCER: Reducers = {
    profile: ProfileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();

    const { id } = useParams<{id: string}>();

    const formData = useSelector(model.getProfileForm);
    const isLoading = useSelector(model.getProfileLoading);
    const error = useSelector(model.getProfileError);
    const readonly = useSelector(model.getProfileReadonly);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(ProfileActions.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(ProfileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(ProfileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(ProfileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(ProfileActions.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(ProfileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(ProfileActions.updateProfile({ currency }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country: Countries) => {
            dispatch(ProfileActions.updateProfile({ country }));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchProfile(id));
    });

    return (
        <DynamicModuleLoader reducers={INITIAL_REDUCER} removeAfterUnmount>
            <Paper>
                <ProfileHeader id={id} />
                <ProfileCard
                    onChangeFirstname={onChangeFirstname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeCountry={onChangeCountry}
                    onChangeLastname={onChangeLastname}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeAvatar={onChangeAvatar}
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                />
            </Paper>
        </DynamicModuleLoader>
    );
};

export default memo(ProfilePage);
