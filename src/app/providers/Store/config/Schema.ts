import { CounterStateSchema } from '@/entities/Counter';
import { UserStateSchema } from '@/entities/User';

export interface StateSchema {
    counter: CounterStateSchema
    user: UserStateSchema
}
