const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader', 'image-webpack-loader'],
        }],
    },
    plugins: [
        new HtmlWebpack({
            template: './index.html',
            chunks: ['header'],
            filename: 'header.bundle.html',
        }),
        new HtmlWebpack({
            template: './index.html',
            chunks: ['body'],
            filename: 'body.bundle.html',
        }),
        new HtmlWebpack({
            template: './index.html',
            chunks: ['footer'],
            filename: 'footer.bundle.html',
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 8564,
        static: {
            directory: path.join(__dirname, './public'),
        },
        open: true,
    },
    devtool: 'inline-source-map',
};
