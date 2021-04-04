const path = require("path");

module.exports = {
    entry: "./src/shop.js",
    output: {
        path: path.resolve(__dirname, "JS_shop/scripts"),
        filename: "shop.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    { loader: "babel-loader" },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ]
            },
        ]
    }
}