/**
 * Generic webpack configuration
 * webpack 1.x.x don't support ES6
 * import webpack from 'webpack';
 * import path from 'path';
 */
var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'build');
var mainPath = path.resolve(__dirname, 'index.js');
var config = {
     devtool: 'cheap-module-eval-source-map',
    mainPath: mainPath,
    entry: {
        main: ['webpack/hot/dev-server', mainPath]
    },

    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },

    // resolve: {
    //     modulesDirectories: ['node_modules', ''],
    //     extension: ['', '.js', '.scss']
    // },

    module: {

        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel-loader'],
            exclude: nodeModulesPath,
            include: __dirname
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            exclude: nodeModulesPath,
            include: __dirname
        }, {
            test: /\.scss$/,
            loaders: ["style", "css?sourceMap", "sass?sourceMap"],
            exclude: nodeModulesPath,
            include: __dirname
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
module.exports = config;
