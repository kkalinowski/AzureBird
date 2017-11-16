var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: './src/js/index.jsx',
    output: {
        path: './public',
        publicPath: null,
        filename: 'bundle.js?[hash]'
    },
    devtools: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel?presets[]=es2015,presets[]=react', 'eslint'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap')
            },
            {
                test: /(\.css)$/, 
                loaders: ['style', 'css']
            },
            {
                test: /\.json$/,
                loaders: ['raw']
            },
            {
                test: /\.(jpg|png|svg)$/,
                loaders: ['file?name=[name].[ext]?[hash]']
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loaders: ['url?name=[name].[ext]?[hash]']
            }
        ]
    },
    plugins: [
        new CleanPlugin(['public'], {
            root: path.resolve(__dirname, '../')
        }),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            hash: true
        }),
        new ExtractTextPlugin('styles.css?[contenthash]'),
        new webpack.ProvidePlugin({
               $: "jquery",
               jQuery: "jquery"
           })
    ],
    node: {
        fs: "empty"
    },
    eslint: {
        configFile: './.eslintrc',
        failOnError: false
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    }
};
