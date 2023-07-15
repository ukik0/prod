import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/Store';

export const getScrollPosition = (state: StateSchema) => state.scrollPersistence.scroll || 0;

export const getScrollByPath = createSelector(
    getScrollPosition,
    (_: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
