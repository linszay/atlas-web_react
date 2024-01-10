// setting up the config
const path = require('path');

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
    devtool: 'inline-source-map',
};

