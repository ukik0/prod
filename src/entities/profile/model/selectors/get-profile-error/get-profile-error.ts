import { StateSchema } from '@/app/providers/Store';

export const getProfileError = (state: StateSchema) => state.profile?.error || undefined;
