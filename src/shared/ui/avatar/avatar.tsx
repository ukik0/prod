import { CSSProperties, useMemo } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames';

import cl from './avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({
    className,
    src,
    size = 100,
    alt,
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    return (
        <img src={src} alt={alt} style={styles} className={clsx({ cls: cl.avatar, additional: [className] })} />
    );
};
