import { StateSchema } from '@/app/providers/Store';

export const getLoginUsername = (state: StateSchema) => state.login?.username || '';
