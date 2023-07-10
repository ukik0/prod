// @ts-ignore
import svg from '@neodx/svg/webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

dotenv.config();

export function buildPlugins({
    paths, isDev, apiUrl, project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            'process.env': JSON.stringify(process.env),
            __PROJECT__: JSON.stringify(project),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        svg({
            root: 'src/shared/assets/icons',
            output: 'public/sprite',
            group: true,
            resetColors: {
                replaceUnknown: 'currentColor',
            },
        }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
        // @ts-ignore
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
    }
    return plugins;
}
