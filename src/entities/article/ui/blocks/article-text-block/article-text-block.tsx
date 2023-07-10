import { memo } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { Typography } from '@/shared/ui/Typography';

import { ArticleTextBlock } from '../../../model/types';

import cl from './article-text-block.module.scss';

interface TextBlockProps {
    className?: string
    block: ArticleTextBlock
}

export const TextBlock = memo(({ className, block }: TextBlockProps) => {
    return (
        <div className={clsx({ cls: cl.TextBlock, additional: [className] })}>
            {block?.title && <Typography variant="title-1" className={cl.title}>{block.title}</Typography>}

            {block.paragraphs.map((paragraph, index) => (
                <Typography key={index} variant="text" className={cl.paragraph}>{paragraph}</Typography>
            ))}
        </div>
    );
});
