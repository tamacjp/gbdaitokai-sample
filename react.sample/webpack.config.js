// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyPlugin = require('copy-webpack-plugin');
const outputPath = path.resolve(__dirname, 'www');

module.exports = {
  entry: {
    sample: ['./src/ts/index.tsx'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        // "to"のパスは、webpackConfig.output.pathの位置がデフォルト。
        { from: './src/html/', to: './' },
        //{ from: './src/css/', to: './css/' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 1,
              modules: {
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {},
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  target: 'web', // ['web', 'es5'] だと webpack-dev-server が動かない
  output: {
    filename: 'js/[name].js',
    path: outputPath,
  },
  //devtool: 'inline-source-map',
  devServer: {
    contentBase: outputPath,
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
  },
};
