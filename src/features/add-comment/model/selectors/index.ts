import { StateSchema } from '@/app/providers/Store';

export const getAddCommentFormError = (state: StateSchema) => state.addComment?.error;
export const getAddCommentFormText = (state: StateSchema) => state.addComment?.text;
