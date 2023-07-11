import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';

import { ArticleDetailsStateSchema } from '@/entities/article';
import { ProfileStateSchema } from '@/entities/profile';
import { UserStateSchema } from '@/entities/user';
import { LoginSchema } from '@/features/auth/by-username';
import { ArticleDetailsCommentSchema } from '@/pages/article-details';

export interface StateSchema {
    user: UserStateSchema

    profile?: ProfileStateSchema
    login?: LoginSchema
    articleDetails?: ArticleDetailsStateSchema
    comments?: ArticleDetailsCommentSchema
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
    navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T extends string> {
    rejectValue: T
    extra: ThunkApi
    state: StateSchema
}
