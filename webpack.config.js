const path = require('path');

module.exports = {
  // bundling mode
  // mode: 'production',
  mode: 'development',
  // entry files
  entry: './src/index.ts',
  // output bundles (location)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'weebs.js',
    library: 'Weebs'
  },
  // file resolutions
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  }
};