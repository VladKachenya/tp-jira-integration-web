const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // webpack will take the files from ./src/App
    entry: './src/App',

    // and output it into /dist as bundle.js
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [

            // we use babel-loader to load our jsx and tsx files
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            strictMath: true,
                            noIeCompat: true,
                        }
                    }
                ],
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};