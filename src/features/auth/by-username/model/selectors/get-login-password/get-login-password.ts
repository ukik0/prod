import { StateSchema } from '@/app/providers/Store';

export const getLoginPassword = (state: StateSchema) => state.login?.password || '';
