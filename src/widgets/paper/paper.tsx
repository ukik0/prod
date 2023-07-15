import path from 'path';

import {
    LegacyRef, memo, ReactNode, RefObject, UIEvent, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/Store';
import { getScrollByPath, ScrollPositionPersistenceActions } from '@/features/scroll-position-persistence';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import {
    useAppDispatch, useInitialEffect, useIntersectionObserver, useThrottle,
} from '@/shared/lib/hooks';

import cl from './paper.module.scss';

interface PaperProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void;
}

export const Paper = memo(({ className, children, onScrollEnd }: PaperProps) => {
    const triggerRef = useRef() as RefObject<Element>;
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const { pathname } = useLocation();

    const dispatch = useAppDispatch();
    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

    useIntersectionObserver(triggerRef, { cb: onScrollEnd });

    const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(ScrollPositionPersistenceActions.setScrollPosition({ path: pathname, position: e.currentTarget?.scrollTop }));
    }, 500);

    useInitialEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollPosition;
        }
    });

    return (
        <main ref={scrollRef} onScroll={handleScroll} className={clsx({ cls: cl.Paper, additional: [className] })}>
            {children}
            {onScrollEnd && <div ref={triggerRef as LegacyRef<HTMLDivElement> | undefined} />}
        </main>
    );
});
