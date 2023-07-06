import { StateSchema } from '@/app/providers/Store';

export const getProfileState = (state: StateSchema) => state.profile?.data;
