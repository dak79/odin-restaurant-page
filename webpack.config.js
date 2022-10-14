const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    devtool: mode === 'development' ? 'inline-source-map' : false,
    rules: [
        {
            test: /\.m?js$/i,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ],
    plugin: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
            template: './src/index.html'
        })
    ]
}