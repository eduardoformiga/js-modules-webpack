const path = require("path");
const nodeENV = process.env.NODE_ENV || "production";

module.exports = {
  mode: nodeENV,
  devtool: "source-map",
  entry: {
    filename: "./app.js"
  },
  output: {
    filename: "./build.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   compress: true, //gzip
  //   port: 9000
  // }
};
