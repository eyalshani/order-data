
/* global __dirname, require, module*/

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const outPutDirectory = 'dist';
const webpack = require('webpack');
const env = require('yargs').argv.env; // use --env with webpack 2
let libraryName = 'order-data';

let outputFile = '';

if (env === 'build') {
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}

const config = {
    entry: {
        'bundle.js': [
            path.resolve(__dirname, 'src/index.js'),
            path.resolve(__dirname, 'src/order-view/OrderView.js'),
            path.resolve(__dirname, 'src/order-view/Translate.js'),
            path.resolve(__dirname, 'src/order-view/Utils.js'),
            path.resolve(__dirname, 'src/order-view/services/User.js'),
            path.resolve(__dirname, 'src/order-view/services/TimeLine.js'),
            path.resolve(__dirname, 'src/order-view/services/Table.js'),
            path.resolve(__dirname, 'src/order-view/services/Segmentations.js'),
            path.resolve(__dirname, 'src/order-view/services/Promotions.js'),
            path.resolve(__dirname, 'src/order-view/services/Payments.js'),
            path.resolve(__dirname, 'src/order-view/services/Oth.js'),
            path.resolve(__dirname, 'src/order-view/services/Items.js'),
            path.resolve(__dirname, 'src/order-view/services/Histories.js'),
            path.resolve(__dirname, 'src/order-view/services/Dishes.js'),
            path.resolve(__dirname, 'src/order-view/services/Discounts.js'),
            path.resolve(__dirname, 'src/order-view/services/Courses.js'),
        ]
    },
    output: {
        path: path.resolve(__dirname , outPutDirectory),
        filename: outputFile
    },
    mode: 'development',
    module: {
        rules : [
            {
                loader:'babel-loader',
                test: /\.js$/,
                exclude:  /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    devServer:{
        port: 3000,
        contentBase: __dirname + '/' + outPutDirectory,
        inline: true
    },
    optimization:{
        minimizer: [new UglifyJsPlugin()]
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version)
        })
    ]
}
module.exports = config;


