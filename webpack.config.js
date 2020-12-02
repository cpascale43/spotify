const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "source.js",
    path: path.resolve(__dirname, "public"),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              "@babel/preset-react",
            ],
          },
        },
      },
      //   { test: /\\.css$/, use: "css-loader" }
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },
};
