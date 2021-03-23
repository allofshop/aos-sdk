/**
 * @copyright Copyright © 2018-2019 Corretto, Inc. All rights reserved.
 */

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const NodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '.dist'),
    library: 'aos-sdk-nodejs',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.prod.json',
            },
          },
        ],
      },
    ],
  },
  plugins: [],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: { comments: false },
          keep_classnames: true,
        },
      }),
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      // path.resolve(__dirname, 'src'),
    ],
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.prod.json' })],
  },
  externals: [NodeExternals()],
  bail: true,
};
