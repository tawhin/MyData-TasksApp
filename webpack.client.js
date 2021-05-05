const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const serverConfig = require('./src/server/config');

const config = {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // add the plugin to your plugins array
    new webpack.DefinePlugin({
      'process.env.DATA_SERVER_HOST': JSON.stringify(serverConfig.dataServer),
      'process.env.DB_NAME': JSON.stringify(serverConfig.dbName),
    }),
  ],
};

module.exports = config;
