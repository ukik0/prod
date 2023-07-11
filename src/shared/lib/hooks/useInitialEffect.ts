import { AsyncThunkAction } from '@reduxjs/toolkit';
import { useEffect } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

export const useInitialEffect = (cb: () => void) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            cb();
        }
        // eslint-disable-next-line
    }, []);
};
