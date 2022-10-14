const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader'] 
            }
        ]
    },
    plugins: [

        new MiniCSSExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    optimization:{
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }
});
