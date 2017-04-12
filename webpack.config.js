const path = require("path");
const webpack= require("webpack");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ],

  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass?sourceMap',
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
