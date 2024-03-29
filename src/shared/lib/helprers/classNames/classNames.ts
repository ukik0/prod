interface classNamesProps {
    cls?: string
    mods?: Record<string, boolean | string>
    additional?: (string | undefined)[]
}

export const clsx = ({ cls = '', mods = {}, additional = [] }: classNamesProps): string => {
    return [cls, ...additional.filter(Boolean), Object.entries(mods).map(([key, value]) => (value ? key : null)).filter(Boolean).join(' ')].join(' ').trim();
};
