const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports =  {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
        clean: true,
        pathinfo: false
    },
    module: {
        rules: [
            // Babel
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // Images
            {
                test: /\.(ico|svg|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/imgs/[hash][ext][query]'
                }
            },
            // Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext][query]'
                }
            },
            //CSS
            {
                test: /\.css$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader'],
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

        new FaviconsWebpackPlugin({
            logo: './src/assets/imgs/favicon/soup-favicon.svg',
            prefix: '',
            publicPath: 'assets/favicons',
            outputPath: 'assets/favicons'
        }),

        new MiniCSSExtractPlugin({
            filename: 'style/style.css',
            chunkFilename: '[id].css'
        }),
        
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    }
}
