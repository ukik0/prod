import {
    ChangeEvent, forwardRef, memo, useMemo,
} from 'react';

import { clsx } from '@/shared/lib/helprers/classnames';
import { Typography } from '@/shared/ui/Typography';

import cl from './select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className, label, options, onChange, value, readonly,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionsList = useMemo(
        () => options?.map((opt) => (
            <option
                className={cl.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        )),
        [options],
    );

    return (
        <div className={clsx({ cls: cl.Wrapper, additional: [className] })}>
            {label && <Typography variant="title-2" className={cl.label}>{`${label}>`}</Typography>}
            <select
                disabled={readonly}
                className={cl.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};
