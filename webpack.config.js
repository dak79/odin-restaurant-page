const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    return {
        mode: env.production ? 'production' : 'development',
        entry: {
            index: './src/index.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            clean: true
        },
        devtool: argv.mode === 'development' ? 'inline-source-map' : false,
        devServer: {
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, './dist'),
            open: true,
            compress: true,
            hot: true,
            port: 8080
        },
        module: {
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
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'asset/resource'
                },
                {
                    test: /\.(woff(2)?|eot|tff|otf|svg)$/i,
                    type: 'asset/inline'
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Restaurant Page',
                template: './src/html/template.html',
                filename: './index.html',
                minify: true
            }),
            new CleanWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
}