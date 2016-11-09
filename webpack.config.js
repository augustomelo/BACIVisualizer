module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel',
            sass: 'vue-style-loader!css-loader!sass?indentedSyntax'
        }
    },
    babel: {
        presets: ["es2015", "stage-0"],
        plugins: ["transform-runtime"]
    }
};
