const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader"
                ] 
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'PrismJS With CSS-Modules',
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.[hash].css',
            chunkFilename: "[id].css"
        })
    ],
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    }
};
