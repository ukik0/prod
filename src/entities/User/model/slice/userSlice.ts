import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserStateSchema } from '@/entities/user';
import { AUTH_KEY_LS } from '@/shared/constants';

const initialState: UserStateSchema = {
    authData: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        validateSession: (state) => {
            const user = localStorage.getItem(AUTH_KEY_LS);

            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = null;
            localStorage.removeItem(AUTH_KEY_LS);
        },
    },
});

export const userActions = userSlice.actions;
export const UserReducer = userSlice.reducer;
