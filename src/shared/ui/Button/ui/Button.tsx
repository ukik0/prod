import {clsx} from "@/shared/lib/helprers/classNames/classNames";
import cl from './Button.module.scss'

type ButtonThemes = 'clear' | ''

interface ButtonProps extends ReactTagProps<'button'>{
    className?: string
    theme?: ButtonThemes
}

export const Button = ({className, children, theme = 'clear', ...rest}: ButtonProps) => {
    return (
        <button className={clsx({cls: cl.Button, additional: [className, cl[theme]]})} {...rest}>
            {children}
        </button>
    )
}