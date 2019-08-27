const rules = require('./webpack.renderer.rules');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./webUI/static/index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: 'node_modules/pdfjs-dist/build/pdf.worker.js',
        to: 'main_window/'
      },
    ]),
  ],
};
