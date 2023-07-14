import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';

import { ArticleDetailsStateSchema } from '@/entities/article';
import { ProfileStateSchema } from '@/entities/profile';
import { UserStateSchema } from '@/entities/user';
import { AddCommentStateSchema } from '@/features/add-comment/model/types';
import { LoginSchema } from '@/features/auth/by-username';
import { ArticleDetailsCommentSchema } from '@/pages/article-details';
import { ArticlesStateSchema } from '@/pages/articles';

export interface StateSchema {
    user: UserStateSchema

    profile?: ProfileStateSchema
    login?: LoginSchema
    articleDetails?: ArticleDetailsStateSchema
    comments?: ArticleDetailsCommentSchema
    addComment?: AddCommentStateSchema
    articles?: ArticlesStateSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKeys, reducer: Reducer) => void
    remove: (key: StateSchemaKeys) => void
}

export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkApi {
    api: AxiosInstance,
}

export interface ThunkConfig<T extends string> {
    rejectValue: T
    extra: ThunkApi
    state: StateSchema
}
