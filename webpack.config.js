const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|jpg|jpeg|png|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Magic Photography",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
