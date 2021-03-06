const path = require('path');

module.exports = {
  entry: {
    main: './main.js',
    numbers: './numbers.js',
  },

  output: {
    filename: '[name].bundle.js',
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
