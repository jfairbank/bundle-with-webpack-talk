const path = require('path');

module.exports = {
  entry: './main.js',

  output: {
    filename: './bundle.js',
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
};
