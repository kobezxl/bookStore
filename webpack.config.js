
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var  ExtractTextPlugin = require( 'extract-text-webpack-plugin');
module.exports = {
//页面入口文件配置
    entry: {
        app: './app/app.js',
    },
//入口文件输出配置
    output: {
        path: path.resolve(__dirname, '/build/app.js'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(jpg|png|gif|svg|woff2|ttf|woff|eot|ico)$/,
                use: 'file-loader'
            }
        ]
    },
    resolve:{
        extensions: [ '.js', '.json', '.scss']
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        disableHostCheck: true,
        compress: false,
        open: true,
        stats: 'errors-only',
        port:'8091'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./app/index.html',
            inject:true
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        }),

    ]
};