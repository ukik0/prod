import { StateSchema } from '@/app/providers/Store';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
