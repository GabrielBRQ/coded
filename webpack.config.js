const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/scripts/index.js",
    prologo: "./src/scripts/prologo.js",
    captcha: "./src/scripts/captcha.js",
    captchaV2: "./src/scripts/captchaV2.js",
    ato1v1: "./src/scripts/ato1-v1.js",
    joyJournal: "./src/scripts/joyJournal.js",
    byteBuzz: "./src/scripts/byteBuzz.js",
    dnLeaks: "./src/scripts/dnLeaks",
    timeMachine : "./src/scripts/timeMachine.js",
    titleScreen: "./src/scripts/titleScreen.js"
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      filename: 'index.html',
      chunks: ['index', 'titleScreen'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/prologo.html',
      filename: 'prologo.html',
      chunks: ['prologo', 'captcha'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/ato1-v1.html',
      filename: 'ato1-v1.html',
      chunks: ['ato1v1', 'captchaV2', 'timeMachine'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/joyJournal.html',
      filename: 'joyJournal.html',
      chunks: ['joyJournal', 'captchaV2', 'timeMachine'],
      excludeChunks: ['ato1-v1'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/byteBuzz.html',
      filename: 'byteBuzz.html',
      chunks: ['byteBuzz', 'captchaV2', 'timeMachine'],
      excludeChunks: ['ato1-v1'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/dnLeaks.html',
      filename: 'dnLeaks.html',
      chunks: ['dnLeaks', 'captchaV2', 'timeMachine'],
      excludeChunks: ['ato1-v1'],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
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
