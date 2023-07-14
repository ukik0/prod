import {
    LegacyRef,
    memo, MutableRefObject, ReactNode, RefObject, useRef,
} from 'react';

import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { useIntersectionObserver } from '@/shared/lib/hooks';

import cl from './paper.module.scss';

interface PaperProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void;
}

export const Paper = memo(({ className, children, onScrollEnd }: PaperProps) => {
    const triggerRef = useRef() as RefObject<Element>;

    useIntersectionObserver(triggerRef, { cb: onScrollEnd });

    return (
        <main className={clsx({ cls: cl.Paper, additional: [className] })}>
            {children}
            {onScrollEnd && <div ref={triggerRef as LegacyRef<HTMLDivElement> | undefined} />}
        </main>
    );
});
