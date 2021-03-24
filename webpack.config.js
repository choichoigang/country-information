const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(HtmlWebpackPlugin);
const port = 3000;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "./build/bundle.[hash].js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],

  resolve: {
    // modules: ["node_modules"],
    extensions: [".js", ".json", ".jsx", ".css"],
  },

  devServer: {
    host: "localhost",
    port: port,
    open: true,
  },
};
