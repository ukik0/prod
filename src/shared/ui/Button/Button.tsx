import { clsx } from '@/shared/lib/helprers/classNames';

import cl from './Button.module.scss';

type ButtonThemes = 'clear' | 'clearInverted' | 'outline' | 'background' | 'backgroundInverted'
type ButtonSizes = 'L' | 'M' | 'XL'

interface ButtonProps extends ReactTagProps<'button'> {
    className?: string
    theme?: ButtonThemes
    square?: boolean
    size?: ButtonSizes
    disabled?: boolean
}

export const Button = ({
    className, size = 'XL', square, children, disabled, theme = 'outline', ...rest
}: ButtonProps) => (
    <button
        data-test-id="button"
        type="button"
        disabled={disabled}
        className={clsx({
            cls: cl.Button,
            mods: { [cl.square]: square, [cl.disabled]: disabled },
            additional: [className, cl[theme], cl[size]],
        })}
        {...rest}
    >
        {children}
    </button>
);
