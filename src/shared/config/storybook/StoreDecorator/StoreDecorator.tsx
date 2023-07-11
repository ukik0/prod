import { ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/Store';
import { ArticleDetailsReducer } from '@/entities/article/model/slice/article-details';
import { ProfileReducer } from '@/entities/profile';
import { AddCommentReducer } from '@/features/add-comment/model/slice/add-comment';
import { LoginReducer } from '@/features/auth/by-username/model/slice';
import { ArticleDetailsCommentReducer } from '@/pages/article-details/model/slice/article-details-comment-slice';
import { Reducers } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const INITIAL_REDUCERS: Reducers = {
    login: LoginReducer,
    profile: ProfileReducer,
    articleDetails: ArticleDetailsReducer,
    comments: ArticleDetailsCommentReducer,
    addComment: AddCommentReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => (Story) => (
    <StoreProvider initialState={state} asyncReducers={INITIAL_REDUCERS as ReducersMapObject<StateSchema>}>
        <Story />
    </StoreProvider>
);
