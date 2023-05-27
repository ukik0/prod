import { clsx } from '@/shared/lib/helprers/classNames/classNames';

import cl from './Button.module.scss';

type ButtonThemes = 'clear' | 'outline' | 'background' | 'backgroundInverted'
type ButtonSizes = 'L' | 'M' | 'XL'

interface ButtonProps extends ReactTagProps<'button'>{
    className?: string
    theme?: ButtonThemes
    square?: boolean
    size?: ButtonSizes
}

export const Button = ({
    className, size = 'XL', square, children, theme = 'clear', ...rest
}: ButtonProps) => (
    <button
        data-test-id="button"
        type="button"
        className={clsx({ cls: cl.Button, mods: { [cl.square]: square }, additional: [className, cl[theme], cl[size]] })}
        {...rest}
    >
        {children}
    </button>
);
