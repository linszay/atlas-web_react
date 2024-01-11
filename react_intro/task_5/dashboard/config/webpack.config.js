// setting up the config
const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    devServer: {
        static: path.join(__dirname, '../dist'),
        hot: true,
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
        {
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
          template: './dist/index.html',
        }),
      ],
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      devtool: 'inline-source-map',
    };
