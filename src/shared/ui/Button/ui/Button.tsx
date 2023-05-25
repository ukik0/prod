import { clsx } from '@/shared/lib/helprers/classNames/classNames';

import cl from './Button.module.scss';

type ButtonThemes = 'clear' | 'outline' | ''

interface ButtonProps extends ReactTagProps<'button'>{
    className?: string
    theme?: ButtonThemes
}

export const Button = ({
    className, children, theme = 'clear', ...rest
}: ButtonProps) => (
    <button data-test-id="button" type="button" className={clsx({ cls: cl.Button, additional: [className, cl[theme]] })} {...rest}>
        {children}
    </button>
);
