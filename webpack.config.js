const path = require("path");
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new htmlPlugin({
      title: "ReFocus | Manage your life",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
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
