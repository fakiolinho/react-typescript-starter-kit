const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = require('./webpack.base.config')({
  entry: './index.tsx',
  plugins: [
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        hoist_funs: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        comparisons: true,
        warnings: true,
        loops: true,
        drop_debugger: true,
      }
    }),
    new OptimizeCssAssetsPlugin(),
  ]
});
