const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
       index: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        open: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // can be removed since it is default
            template: "index_template.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 100000
                        }
                    },
                    {
                        loader: "svg-colorize-loader",
                        options: {
                            color1: "#000000",
                            color2: "#FFFFFF"
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
