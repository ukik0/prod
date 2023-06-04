import { StateSchema } from '@/app/providers/Store';

export const getLoginError = (state: StateSchema) => state.login?.error || null;
