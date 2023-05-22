declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

// @ts-ignore
type ReactTagProps<T> = import('react').ComponentPropsWithRef<T>;

type AppThemes = 'primary' | 'secondary'