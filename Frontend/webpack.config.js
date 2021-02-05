const path = require('path');

module.exports = {
  entry: './client.js',
  devtool: 'inline-source-map',
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { 
        test: /\.tsx$/,
        use: 'ts-loader'
      },
      {
        test: /\.(jpe?g|png|webp)$/i,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/i,
        loader: 'file-loader'
      },
      { test: /\$/, use: 'ts-loader' },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.js' ],
  },
};
