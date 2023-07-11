import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/Store';
import { Comment } from '@/entities/comment';
import { ArticleDetailsCommentSchema } from '@/pages/article-details';
import { fetchComments } from '@/pages/article-details/model/actions/fetch-comments/fetch-comments';

const commentsAdapted = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapted.getSelectors<StateSchema>((state) => state.comments || commentsAdapted.getInitialState());

export const articleDetailsCommentSlice = createSlice({
    name: 'article-details-comment',
    initialState: commentsAdapted.getInitialState<ArticleDetailsCommentSchema>(
        {
            isLoading: false,
            data: undefined,
            error: undefined,
            ids: [],
            entities: {},
        },
    ),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.data = undefined;
            })
            .addCase(fetchComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                state.error = undefined;
                commentsAdapted.setAll(state, action.payload);
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.data = undefined;
            });
    },
});

export const ArticleDetailsCommentActions = articleDetailsCommentSlice.actions;
export const ArticleDetailsCommentReducer = articleDetailsCommentSlice.reducer;
