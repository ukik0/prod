import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockType } from '@/entities/article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CodeBlock } from './article-code-block';

const meta: Meta<typeof CodeBlock> = {
    title: 'entities/CodeBlock',
    component: CodeBlock,
    tags: ['autodocs'],
    args: {},
};

export default meta;

type Story = StoryObj<typeof CodeBlock>;

export const Default: Story = {
    args: {
        block: {
            type: ArticleBlockType.CODE,
            id: '1',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;',
        },
    },
};

export const DarkMode: Story = {
    args: {
        block: {
            type: ArticleBlockType.CODE,
            id: '1',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;',
        },
    },
};

DarkMode.decorators = [ThemeDecorator({ theme: 'dark' })];
