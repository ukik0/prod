import { memo, ReactNode } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames/classNames';

import cl from './card.module.scss';

interface CardProps extends ReactTagProps<'div'>{
    className?: string
    children: ReactNode
}

export const Card = memo(({ className, children, ...props }: CardProps) => {
    return (
        <div className={clsx({ cls: cl.Card, additional: [className] })} {...props}>
            {children}
        </div>
    );
});
