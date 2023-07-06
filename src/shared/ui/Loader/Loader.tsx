import { clsx } from '@/shared/lib/helprers/classnames';
import './Loader.scss';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={clsx({ cls: 'lds-ellipsis', additional: [className] })}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
