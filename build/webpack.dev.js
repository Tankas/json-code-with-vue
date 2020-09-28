const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    entry: './example/entry.js',
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9099,
    hot: true,
  },
  resolve: { 
    extensions: [ 'tsx', '.ts', '.js', '.vue']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue?$/,
        use: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        include: process.cwd(),
        exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    }),
    new VueLoaderPlugin(),
  ]
}