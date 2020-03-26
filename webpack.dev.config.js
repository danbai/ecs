const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            containers: path.join(__dirname, 'src/containers'),
            component: path.join(__dirname, 'src/component'),
            actions: path.join(__dirname, 'src/actions'),
            reducers: path.join(__dirname, 'src/reducers')
        }
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    }
};