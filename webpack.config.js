const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const faviconsPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new htmlPlugin({
      title: "ReFocus | Manage your life",
    }),
    new faviconsPlugin("./assets/refocus-logo.svg"),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|ico)$/i,
        type: "asset/resource",
      },
    ],
  },

  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
};
