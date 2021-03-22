const path = require('path')
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/hello-world/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/hello-world')
  }
}