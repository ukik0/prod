declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpeg'

declare const __IS_DEV__: boolean;

// @ts-ignore
type ReactTagProps<T> = import('react').ComponentPropsWithRef<T>;

type AppThemes = 'light' | 'dark'
