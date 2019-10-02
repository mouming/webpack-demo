const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  // 入口
  entry: "./src/pages/film/index.js",

  // 出口
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },

  // 模块转换器规则
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      { test: /\.(png|jpg|gif)$/, use: "file-loader" },
      { test: /\.vue$/, use: "vue-loader" }
    ]
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html")
    }),

    new CopyWebpackPlugin([{ from: path.resolve(__dirname, "./public") }]),

    new VueLoaderPlugin()
  ],

  // 针对 webpack-dev-server 的配置
  devServer: {
    port: 9090,
    contentBase: path.resolve(__dirname, "./dist")
  }
};
