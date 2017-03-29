const webpack = require('webpack');

module.exports = require('./webpack.base.config')({
  entry: [
    'react-hot-loader/patch',
    './index.tsx',
    'webpack-hot-middleware/client'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
