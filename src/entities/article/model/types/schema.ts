import { Article } from './index';

export interface ArticleDetailsStateSchema {
    isLoading: boolean
    error?: string
    data?: Article
}
