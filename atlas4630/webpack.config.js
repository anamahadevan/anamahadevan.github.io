const path = require('path');

module.exports = {
  mode: 'development',
  entry: './script1.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}; 

