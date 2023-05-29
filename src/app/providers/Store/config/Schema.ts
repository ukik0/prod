import { CounterStateSchema } from '@/entities/Counter';
import { UserStateSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';

export interface StateSchema {
    counter: CounterStateSchema
    user: UserStateSchema
    login: LoginSchema
}
