const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js',
    vendor: ['left-pad'],
  },

  output: {
    filename: 'bundle.js',
  },

  resolve: {
    root: [
      path.join(__dirname, 'modules'),
    ],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
};
