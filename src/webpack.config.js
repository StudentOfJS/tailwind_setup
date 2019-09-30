// this is scaffolding for potential brotli compression
const CompressionPlugin = require(‘compression-webpack-plugin’);
const BrotliPlugin = require(‘brotli-webpack-plugin’);
module.exports = {
  module: {
    rules: [
      // ...
      use: [
        // ...
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),
              require('autoprefixer'),
              require('postcss-nested'),
              require('postcss-custom-properties'),
              require('postcss-import'),
              require('postcss-preset-env')({ stage: 1 }),
              require('cssnano')({
                preset: 'default',
              }),
              new CompressionPlugin({
                asset: ‘[path].gz[query]’,
                algorithm: ‘gzip’,
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.7
                }),
                new BrotliPlugin({
                asset: ‘[path].br[query]’,
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.7
                }),
            ],
          },
        },
      ],
    ],
  }
}