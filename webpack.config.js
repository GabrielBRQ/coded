const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/scripts/index.js",
    prologo: "./src/scripts/prologo.js"
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/html/template.html',
      filename: 'index.html',
      chunks: ['index', 'titleScreen'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/html/prologo.html',
      filename: 'prologo.html',
      chunks: ['prologo'],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mp3|ogg|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'src/audio/',
            },
          },
        ],
      },
    ],
  },
};
