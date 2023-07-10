import { memo } from 'react';

import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { Typography } from '@/shared/ui/Typography';

import { ArticleImageBlock } from '../../../model/types';

import cl from './article-image-block.module.scss';

interface ImageBlockProps {
    className?: string
    block: ArticleImageBlock
}

export const ImageBlock = memo(({ className, block }: ImageBlockProps) => {
    return (
        <div className={clsx({ cls: cl.ImageBlock, additional: [className] })}>
            <img src={block.src} alt={block.title || 'image'} />

            {block.title && <Typography variant="text">{block.title}</Typography>}
        </div>
    );
});
