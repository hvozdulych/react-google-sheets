const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        static: './dist',
        open: true,
        port: 9000
    },
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
