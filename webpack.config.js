const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    }, 
    mode: 'development', 
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                    ['@babel/preset-env'], 
                    ['@babel/preset-react']
                    ],
                },
                }
            }, 
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }, 
    devServer: {
        static: {
            directory: path.join(__dirname, '/client'),
            publicPath: '/'
        },
        historyApiFallback: true, 
        port: 8181,
        proxy: [{
            context: ['/login', '/api', '/newuser', '/verify', '/ticket'], 
            target: 'http://localhost:3000',
        }]

    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, 'client', 'index.html')
        })
    ]

}