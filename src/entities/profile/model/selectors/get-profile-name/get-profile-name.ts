import { StateSchema } from '@/app/providers/Store';

export const getProfileName = (state: StateSchema) => state.profile?.data?.username ?? '';
