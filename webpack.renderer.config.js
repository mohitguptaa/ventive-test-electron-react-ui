const rules = require('./webpack.renderer.rules');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
