import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { clsx } from '@/shared/lib/helprers/classNames/classNames';

import cl from './Anchor.module.scss';

interface AnchorProps extends LinkProps {
    className?: string
    children: ReactNode
    theme?: AppThemes
}

export const Anchor = ({
    className, children, to, theme = 'primary', ...rest
}: AnchorProps) => {
    return (
        <Link to={to} className={clsx({ cls: cl.Anchor, additional: [className, cl[theme]] })} {...rest}>
            {children}
        </Link>
    );
};
