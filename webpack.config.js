const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.jsx',
  output: { path: path.resolve(__dirname, 'dist'), filename: '[name].[contenthash].js', clean: true },
  module: { rules: [{ test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' }, { test: /\.css$/, use: ['style-loader', 'css-loader'] }] },
  resolve: { extensions: ['.js', '.jsx'] },
  optimization: { splitChunks: { chunks: 'all' } },
  devServer: { port: 8080, open: true, hot: true },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })]
};
