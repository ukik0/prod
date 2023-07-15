import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollPositionPersistenceSchema } from '../types';

type ScrollType = {
    path: string
    position: number
}

const initialState: ScrollPositionPersistenceSchema = {
    scroll: {},
};

export const ScrollPositionPersistence = createSlice({
    name: 'scroll-position-persistence',
    initialState,
    reducers: {
        setScrollPosition(state, { payload: { position, path } }: PayloadAction<ScrollType>) {
            state.scroll[path] = position;
        },
    },

});

export const ScrollPositionPersistenceActions = ScrollPositionPersistence.actions;
export const ScrollPositionPersistenceReducer = ScrollPositionPersistence.reducer;
