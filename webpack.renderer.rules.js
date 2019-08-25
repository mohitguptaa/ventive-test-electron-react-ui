const rules = require('./webpack.main.rules');
const path = require('path');

const defaultInclude = path.resolve(__dirname, 'webUI');

rules.push(
  {
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
    include: defaultInclude
  });
rules.push(
  {
    test: /\.jsx?$/,
    use: [{ loader: 'babel-loader' }],
    include: defaultInclude
  });
rules.push(
  {
    test: /\.scss$/,
    use: [
      'style-loader', // creates style nodes from JS strings
      'css-loader', // translates CSS into CommonJS
      'sass-loader', // compiles Sass to CSS, using Node Sass by default
    ],
  });

rules.push(
  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [{ loader: 'file-loader', },],
  });

module.exports = rules;
