const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './about/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'about/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 1234
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('about/index.css'),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: '../'
        })
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  }
};
