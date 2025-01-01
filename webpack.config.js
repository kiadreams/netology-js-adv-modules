const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
  mode: 'production',

  entry: './src/index.mjs',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({
      configType: 'flat',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
    watchFiles: ['./src/**/*', './dist/*'],
  },
}