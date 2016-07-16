const path = require('path');

module.exports = {
  devtool: '#inline-source-map',

  entry: {
    main: './main.js',
    nameTag: './nameTag.js',
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
