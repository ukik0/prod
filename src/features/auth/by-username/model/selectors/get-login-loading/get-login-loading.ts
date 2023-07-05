import { StateSchema } from '@/app/providers/Store';

export const getLoginLoading = (state: StateSchema) => state.login?.isLoading || false;
