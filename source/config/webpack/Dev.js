'use strict';

/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackDevConfig extends WebpackBaseConfig {

    constructor() {
        super();
        this.config = {
            entry: [
                'babel-polyfill',
                'webpack/hot/only-dev-server',
                'react-hot-loader/patch',
                './index.js'
            ],
            plugins: [
                new webpack.DefinePlugin({
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
                    'REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL || 'http://localhost:4000/api/'),
                    'REACT_APP_BASE_API_URL': JSON.stringify(process.env.REACT_APP_BASE_API_URL || 'http://localhost:4000/')
                }),
                new webpack.optimize.ModuleConcatenationPlugin(),
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery'
                }),

                new webpack.NoEmitOnErrorsPlugin(),
                new webpack.NamedModulesPlugin(),
            ]
        };

        this.config.module.rules = this.config.module.rules.concat([
            {
                test: /^.((?!cssmodule).)*\.(sass|scss)$/,
                loaders: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /^.((?!cssmodule).)*\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ])

    }
}

module.exports = WebpackDevConfig;
