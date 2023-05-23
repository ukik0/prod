import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';

import cl from './PageLoader..module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={clsx({ cls: cl.page, additional: [className] })}>
            <Loader />
        </div>
    );
};
