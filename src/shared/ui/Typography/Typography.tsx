import { clsx } from '@/shared/lib/helprers/classNames/classNames';

import cl from './Typography.module.scss';

type TagTypes = keyof HTMLElementTagNameMap;
type VariantTypes = 'title-1' | 'title-2' | 'text' | 'error';

interface TypographyProps {
    children: string;
    variant: VariantTypes;
    tag?: TagTypes;
    className?: string;
}

export const Typography = ({
    children, tag = 'div', variant, className,
}: TypographyProps) => {
    const Component = tag;

    return (
        <Component
            data-testid="Typography"
            className={clsx({ additional: [className, cl[variant]] })}
        >
            {children}
        </Component>
    );
};
