/**
 * author      : denghm
 * createTime  : 2016/12/9 16:50
 * description : build-dev
 */

const path = require('path');
const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/style/index.scss'
    },
    output: {
        path: path.resolve(__dirname, '../dist/fonts'),
        publicPath: '/dist/',
        filename: 'vue-design.js'
    },
    resolve: {
        extensions: ['', '.scss', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: "file"
            }
            //,
            //{
            //    test: /\.scss$/,
            //    loader: "style-loader!css-loader!"
            //}
            //{
            //    test: /\.css$/,
            //    loader: 'style!css!autoprefixer'
            //},
            //{
            //    test: /\.scss$/,
            //    loader: "style-loader!css-loader!sass-loader!"
            //}
        ]
    },
    plugins: [
        //new ExtractTextPlugin("../dist/[name].css?hash=[hash]",{ allChunks : true,resolve : ['modules'] }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
};