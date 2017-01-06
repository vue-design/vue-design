/**
 * author      : denghm
 * createTime  : 2016/12/9 16:50
 * description : build-style-dev
 */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/style/index.scss'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'vue-design.css'
    },
    module: {
        loaders: [
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'file-loader?name=../dist/fonts/[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader','sass-loader')
            },
            {
                test:  /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            },
            {
                test:  /\.less$/,
                loader:  "style!css!less"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../dist/vue-design.css?hash=[hash]",{ allChunks : true,resolve : ['modules'] }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
};