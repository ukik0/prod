import { memo, SVGProps } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames';

import cl from './icon.module.scss';
import { SpritesMap } from './sprite.h';

export type SpriteKey = {
    [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`
}[keyof SpritesMap]

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
    name: SpriteKey
}

export const Icon = memo(({
    name, className, viewBox, ...props
}: IconProps) => {
    const [spriteName, iconName] = name.split('/');

    return (
        <svg
            className={clsx({ cls: cl.icon, additional: [className] })}
            viewBox={viewBox}
            focusable="false"
            aria-hidden
            {...props}
        >
            <use xlinkHref={`./sprite/${spriteName}.svg#${iconName}`} />
        </svg>
    );
});
