import { memo } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { Code } from '@/shared/ui/code/code';

import { ArticleCodeBlock } from '../../../model/types';

interface CodeBlockProps {
    className?: string
    block: ArticleCodeBlock
}

export const CodeBlock = memo(({ className, block }: CodeBlockProps) => {
    return (
        <div className={clsx({ additional: [className] })}>
            <Code text={block.code} />
        </div>
    );
});
