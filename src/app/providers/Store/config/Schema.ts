import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { CounterStateSchema } from '@/entities/Counter';
import { ProfileStateSchema } from '@/entities/profile';
import { UserStateSchema } from '@/entities/user';
import { LoginSchema } from '@/features/auth/by-username';

export interface StateSchema {
    counter: CounterStateSchema
    user: UserStateSchema
    profile?: ProfileStateSchema
    login?: LoginSchema
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
