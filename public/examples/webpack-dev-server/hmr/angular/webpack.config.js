const path = require('path');

module.exports = {
  devtool: '#inline-source-map',
  entry: './main.js',

  output: {
    publicPath: 'http://127.0.0.1:8080/assets',
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

      {
        test: /\.html$/,
        loader: 'html',
      },
    ],
  },
};
