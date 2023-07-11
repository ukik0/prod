import { StateSchema } from '@/app/providers/Store';

export const getArticleCommentIsLoading = (state: StateSchema) => state.comments?.isLoading;
export const getArticleCommentError = (state: StateSchema) => state.comments?.error;
