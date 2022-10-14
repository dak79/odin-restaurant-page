const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports =  {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    module: {
        rules: [
            // Babel
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // Imeges
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            // Fonts and svg
            {
                test: /\.(woff(2)?|eot|tff|otf|svg)$/i,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
            template: './src/html/template.html',
            filename: './index.html',
            minify: true
            }),
            
            new CleanWebpackPlugin(),
        ]
    }
