/**
 * author      : denghm
 * createTime  : 2016/12/9 16:50
 * description : build-dev
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'vue-design.js',
        library: 'vue-design',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer'
        }, {
            test: /\.scss$/,
            loader: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url?limit=8192'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'vue-html'
        }],
        sassLoader: {
            includePaths: [path.resolve(__dirname, "../dist")]
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
};