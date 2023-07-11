import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddCommentStateSchema } from '@/features/add-comment/model/types';

const initialState: AddCommentStateSchema = {
    text: '',
    error: undefined,
};

export const AddComment = createSlice({
    name: 'add-comment',
    initialState,
    reducers: {
        setText(state, action: PayloadAction<string>) {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder
        // .addCase(fetchProfile.pending, (state) => {
        //     state.error = undefined;
        //     state.isLoading = true;
        //     state.data = undefined;
        // })
        // .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
        //     state.isLoading = false;
        //     state.error = undefined;
        //     state.data = action.payload;
        //     state.form = action.payload;
        // })
        // .addCase(fetchProfile.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        //     state.data = undefined;
        // });
    },
});

export const AddCommentActions = AddComment.actions;
export const AddCommentReducer = AddComment.reducer;
