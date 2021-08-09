const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATH = {
  source: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  mode: "development",
  entry: {
    'index': PATH.source + '/pages/index/index.js',
  },
  output: {
    path: PATH.dist,
    filename: 'js/[name].js',
    // assetModuleFilename: 'images/[name][ext][query]',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 8080,
    // open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: PATH.dist + '/index.html',
      template: PATH.source + '/pages/index/index.html',
      chunks: ['index'],
    }),
    new MiniCssExtractPlugin({
      filename: '/styles/[name].css',
    }),
    // new CleanWebpackPlugin({ dry: true, }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]'
        }
      },
      {
        test: /\.ico$/,
        dependency: { not: ['url'] },

        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 8192,
            }
          },
        ],
      },
    ],
  }
};