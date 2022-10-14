const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        open: true,
        compress: true,
        hot: true,
        port: 8080
    },
    module: {
        rules: [
            // CSS
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

});