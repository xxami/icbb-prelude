
var webpack = require('webpack');

module.exports = {
    entry: './src/icbb.js',
    output: {
        path: __dirname,
        filename: 'game.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'webpack-strip?strip[]=console.log'

        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader?presets[]=es2015'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};
