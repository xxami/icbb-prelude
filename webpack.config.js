
var webpack = require('webpack');

module.exports = {
    entry: './src/icbb.js',
    output: {
        path: __dirname,
        filename: 'game.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};

