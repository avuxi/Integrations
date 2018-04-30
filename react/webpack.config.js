module.exports = {
  entry: {
    map: './map/map.js',
    lse: './lse/lse.js'
  },
  
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  
  devServer: {
    contentBase: './'
  }
};