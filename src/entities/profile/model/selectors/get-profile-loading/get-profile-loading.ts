import { StateSchema } from '@/app/providers/Store';

export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading || false;
