const path = require("path");

module.exports = {
  entry: "./src/Index.bs.js",
  mode: "development",
  output: {
    path: path.join(__dirname, "bundleOutput"),
    filename: "index.js"
  },
  devServer: {
    index: "index.html",
    port: 8000,
    contentBase: __dirname,
    writeToDisk: true, // so contentBase and output.path can be different
    historyApiFallback: true
  }
};
