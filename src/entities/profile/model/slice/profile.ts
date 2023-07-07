import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfile, Profile, ProfileStateSchema } from '@/entities/profile';

import { updateProfile } from '../actions/update-profile/update-profile';

const initialState: ProfileStateSchema = {
    data: undefined,
    error: undefined,
    form: undefined,
    isLoading: false,
    readonly: true,
};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.form = state.data;
            state.readonly = true;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.data = undefined;
            })
            .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.data = undefined;
            })
            // UPDATE PROFILE
            .addCase(updateProfile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.data = undefined;
            })
            .addCase(updateProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.data = undefined;
            });
    },
});

export const ProfileActions = ProfileSlice.actions;
export const ProfileReducer = ProfileSlice.reducer;
