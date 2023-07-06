import path from 'path';

import webpack from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');
    config.resolve!.alias = {
        ...config.resolve!.alias,
        '@': paths.src,
    };
    config.module!.rules!.push(buildCssLoader(true));
    config.module!.rules = config.module!.rules!.map((rule) => {
        // @ts-ignore
        if (/svg/.test(rule.test)) {
            // @ts-ignore
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module!.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    });

    config.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify(''),
    }));

    return config;
};
