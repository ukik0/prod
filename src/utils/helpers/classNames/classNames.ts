
interface classNamesProps {
    cls: string
    mods?: Record<string, boolean | string>
    additional?: string[]
}

export const classNames = ({cls, mods = {}, additional = []}: classNamesProps): string => {

    return [cls, ...additional, Object.entries(mods).map(([key, value]) => value ? key : null).filter(Boolean).join(' ')].join(' ')
}

