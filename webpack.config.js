const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const autoprefixer = require('autoprefixer');
// const helpers = require('./helpers');

const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    // context: helpers.root('src'),
    entry: {
        home: [
            './home.js',
            './css/main.scss',
        ],
        booking: [
            './booking.js',
            './css/main.scss',
        ],
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist',
        filename: '[name].js',
    },
    devServer: {
        contentBase: "./src"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: [
                    'env',
                    'react',
                    'es2015',
                    'stage-1',
                ]
            },
        },
        {
            test: /\.scss$/,
            use: extractPlugin.extract({
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [autoprefixer];
                            },
                        },
                    },
                    'sass-loader'
                ],
            }),
        },
        {
            test: /\.(jpg|png)$/,
            loader: 'file-loader',
        },
        {
            test: /\.svg/,
            use: {
                loader: 'svg-url-loader',
                options: {},
            }
        },
        ],
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html'
        })
    ],
};
