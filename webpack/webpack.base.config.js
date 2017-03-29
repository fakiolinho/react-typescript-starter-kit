const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const cssnano = require('cssnano');

module.exports = options => ({
  context: path.resolve(__dirname, '../client'),
  entry: options.entry,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, '../client'), 'node_modules']
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
      use: ['awesome-typescript-loader'],
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  cssnano({
                    autoprefixer: {
                      add: true,
                      remove: true,
                      browsers: ['last 2 versions'],
                    },
                    discardComments: {
                      removeAll: true,
                    },
                    discardDuplicates: true,
                    discardUnused: false,
                    mergeIdents: false,
                    reduceIdents: false,
                    safe: true,
                    sourcemap: true,
                  }),
                ];
              }
            }
          },
          'sass-loader'
        ]
      })
    }]
  },

  plugins: options.plugins.concat([
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: '../dist/index.html'
    }),
    new Dotenv({
      path: path.resolve(__dirname, '../.env'),
      systemvars: true,
    }),
    new ExtractTextPlugin('styles.css')
  ]),

  externals: {
    'cheerio': 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react'
  }
});
