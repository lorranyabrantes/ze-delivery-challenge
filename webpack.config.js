const path = require("path");
const HWP = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "/index.js"),
    output: {
        filename: "build.js",
        path: path.join(__dirname, "/dist")
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.(jpg|png|svg)$/,
            loader: "file-loader",
            options: {
                name: "[path][name].[ext]",
            },
        },
        {
            test: /\.css$/i,
            loader: "style-loader!css-loader",
        }]
    },
    plugins: [
        new HWP(
            { template: path.join(__dirname, "/index.html") }
        )
    ]
}