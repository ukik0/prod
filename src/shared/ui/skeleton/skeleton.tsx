import { CSSProperties, memo } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames/classNames';

import cl from './skeleton.module.scss';

interface SkeletonProps {
    className?: string
    height?: string | number;
    width?: string | number;
    radius?: string;
}

export const Skeleton = memo(({
    className, radius, height, width,
}: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: radius,
    };

    return (
        <div
            className={clsx({ cls: cl.Skeleton, additional: [className] })}
            style={styles}
        />
    );
});
