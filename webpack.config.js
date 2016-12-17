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
      { test: /\.styl$/, loader: 'style-loader!css-loader?sourceMap!postcss-loader!stylus-loader' },
      { test: /muse-ui.src.*?js$/, loader: 'babel' }
    ]
  },
  resolve: {
    alias: {
      'muse-components': 'muse-ui/src'
    },
    extensions: ["", ".vue", ".js"],
  },
  vue: {
    loaders: {
      stylus: 'vue-style-loader!css-loader?sourceMap!stylus-loader',
    }
  },
};