var webpack = require('webpack');
var pathUtil = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/index.jsx',
  output: {
    publicPath: './',		
    path: pathUtil.join(__dirname, 'public'),
    filename: '[chunkhash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
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
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js']
      }
    })
  ]
};