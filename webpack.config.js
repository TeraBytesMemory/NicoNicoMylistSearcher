module.exports = {
    entry: './src/init.jsx',
    output: {
        filename: './build/bundle.js',
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
