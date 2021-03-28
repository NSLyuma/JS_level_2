const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry: "./src/shop.js",
    output: {
        path: path.resolve(__dirname, "JS_shop/scripts"),
        filename: "shop.js"
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.js",
        },
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
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
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
            {
                test: /\.vue$/,
                use: [
                    { loader: "vue-loader" },
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
}