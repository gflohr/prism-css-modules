const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
        entry: './src/index.js',
        devServer: {
                contentBase: './dist'
        },
        plugins: [
                new CleanWebpackPlugin(['dist']),
                new HtmlWebpackPlugin({
                        title: 'PrismJS With CSS-Modules',
                        template: 'index.html'
                })
        ],
        output: {
                filename: '[name].bundle.js',
                path: path.resolve(__dirname, 'dist')
        }
};
