const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  output: {
    path: `${__dirname}/../../origo/plugins`,
    publicPath: '/build/js',
    filename: 'multiselect.js',
    libraryTarget: 'var',
    libraryExport: 'default',
    library: 'Multiselect'
  },
  mode: 'development',
  module: {
  },

  devServer: {
    static: './',
    port: 9008,
    devMiddleware: {
      //index: true,
      //mimeTypes: { 'text/html': ['phtml'] },
      //publicPath: '/publicPathForDevServe',
      //serverSideRender: true,
      writeToDisk: true
    }
  }
});
