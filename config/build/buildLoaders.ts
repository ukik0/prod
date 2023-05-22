import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options

    const typescriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
    }

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {loader: "css-loader",
                    options: {
                        modules: {
                            auto: true,
                            localIdentName: isDev
                                ? "[path][name]__[local]--[hash:base64:5]"
                                : '[hash:base64:8]'
                        },
                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
    }

    const svgLoader = {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
    }

    const fileLoader = {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader
    ]
}