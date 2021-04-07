const path = require('path');

const SRC_DIR = path.join(__dirname, 'client');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(SRC_DIR, 'Routes.jsx'),
  output: {
    path: OUT_DIR,
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        // loader: 'url-loader?limit=100000',
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      }],
    // loaders: [
    //   {
    //     test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    //     loader: 'url-loader?limit=100000',
    //   }],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.png', '.jpg', 'jpeg'],
  },
};
