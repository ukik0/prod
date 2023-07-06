import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { clsx } from '@/shared/lib/helprers/classnames';

import cl from './Anchor.module.scss';

type AnchorTheme = 'primary' | 'secondary' | 'red'

interface AnchorProps extends LinkProps {
    className?: string
    children: ReactNode
    theme?: AnchorTheme
}

export const Anchor = memo(({
    className, children, to, theme = 'primary', ...rest
}: AnchorProps) => {
    return (
        <Link to={to} className={clsx({ cls: cl.Anchor, additional: [className, cl[theme]] })} {...rest}>
            {children}
        </Link>
    );
});
