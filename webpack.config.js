const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const src = path.join(__dirname, "src");
const dist = path.join(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: path.resolve(src, "js/index.tsx"),
  output: {
    path: dist,
    filename: "app.bundle.js",
    publicPath: "/"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: dist,
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 3456
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(src, "html/index.html")
    })
  ]
};
