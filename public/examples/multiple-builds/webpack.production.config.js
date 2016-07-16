const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devtool: '#source-map',

  entry: {
    main: './main.js',
    vendor: ['react', 'react-dom', 'redux', 'react-redux'],
  },

  output: {
    filename: '[name]-[chunkhash].js',
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules'),
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      '__DEV__': false,
    }),

    new webpack.optimize.CommonsChunkPlugin(
      'vendor',
      'vendor-[chunkhash].js'
    ),

    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),

    new ExtractTextPlugin('main-[chunkhash].css'),

    new HtmlWebpackPlugin({
      template: 'production.ejs',
      filename: 'production.html',
    }),
  ],
};
