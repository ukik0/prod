import type { Preview } from '@storybook/react';

import { RouteDecorator } from '@/shared/config/storybook/RouteDecorator/RouteDecorator';

import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
    decorators: [
        StyleDecorator,
        ThemeDecorator({ theme: 'light' }),
        RouteDecorator,
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
    },
};

export default preview;
