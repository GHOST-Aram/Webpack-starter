const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode:'production',
    entry:{
        bundle: './src/index.js',
       
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'inline-source-map', 
    module: {
        rules: [
            {
            test: /\.scss$/,
            use:['style-loader', 'css-loader', 'sass-loader']
        },
            {
            test: /\.css$/,
            use:['style-loader', 'css-loader']
        },
        {
            test: /\.(svg|png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
        ]
        
    },
    plugins:[
        // new BundleAnalyzerPlugin,
        new HtmlWebpackPlugin({
            title: 'Webpack starter',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
}