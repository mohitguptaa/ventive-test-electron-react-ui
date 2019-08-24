const rules = require('./webpack.rules');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

const defaultInclude = path.resolve(__dirname, 'webUI')

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
  include: defaultInclude
});

rules.push({
  test: /\.jsx?$/,
  use: [{ loader: 'babel-loader' }],
  include: defaultInclude
});

rules.push({
  test: /\.scss$/,
  use: [
    'style-loader', // creates style nodes from JS strings
    'css-loader', // translates CSS into CommonJS
    'sass-loader', // compiles Sass to CSS, using Node Sass by default
  ],
});

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
