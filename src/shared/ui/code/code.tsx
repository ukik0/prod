import { memo, ReactNode, useCallback } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import cl from './code.module.scss';

interface CodeProps {
    className?: string
    text: string
}

export const Code = memo(({ className, text }: CodeProps) => {
    const handleCopyText = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <div className={clsx({ cls: cl.Code, additional: [className] })}>
            <pre>
                <Button onClick={handleCopyText} square theme="outline" className={cl.copy}>
                    <Icon name="shared/copy" className={cl.icon} />
                </Button>
                <code>
                    {text}
                </code>
            </pre>
        </div>
    );
});
