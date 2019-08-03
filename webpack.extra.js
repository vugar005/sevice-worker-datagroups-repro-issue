const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyPlugin([
      { from: './src/assets/googlec2cdd7644fbce54f.html', to: './' },
    ])
  ]
}
