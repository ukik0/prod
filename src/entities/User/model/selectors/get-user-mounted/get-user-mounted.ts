import { StateSchema } from '@/app/providers/Store';

export const getUserMounted = (state: StateSchema) => state.user.mounted;
