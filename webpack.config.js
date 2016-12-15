module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.vue$/, loader: 'vue'},
      { test: /\.styl$/, loader: 'style-loader!css-loader?sourceMap!postcss-loader!stylus-loader' }
    ]
  },
  resolve: {
    extensions: ["", ".vue", ".js"],
  },
  vue: {
    loaders: {
      stylus: 'vue-style-loader!css-loader?sourceMap!stylus-loader',
    }
  },
};