// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: {
    main: ['./src/index.ts'],
  },
  output: {
    filename: 'aos-sdk-payment.js',
    path: path.resolve(__dirname, '.dist'),
    publicPath: '/',
    library: 'aos-sdk-payment',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias: {},
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
    ],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(ts|tsx)$/,
  //       use: {
  //         loader: 'awesome-typescript-loader',
  //         options: {
  //           // transpileOnly: true,
  //         },
  //       },
  //       exclude: /node_modules/,
  //     },
  //   ],
  // },
};
