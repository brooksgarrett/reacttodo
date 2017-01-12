var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
        ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
         new webpack.ProvidePlugin({
             '$': 'jquery',
             'jQuery': 'jquery'
         })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: __dirname,
        alias: {
            ApplicationStyles: 'app/styles/app.scss',
            app: 'app'
        },
        modulesDirectories: [
            'node_modules',
            './app/components',
            './app/api',
            './app/actions',
            './app/reducers',
            './app/store'
        ],
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss'),
        ]
    },
    devtool: 'inline-source-map'
};
