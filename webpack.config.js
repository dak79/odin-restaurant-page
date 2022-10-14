const path = require('path');
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
            static: './dist'
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                          presets: ['@babel/preset-env']
                        }
                    }
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Restaurant Page',
                template: './src/html/template.html',
                filename: './index.html',
                minify: true
            }),
            new CleanWebpackPlugin()

        ]
    }
}