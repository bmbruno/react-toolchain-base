/*

This configuration tells Webpack where our 'source' scripts (JS and JSX) are.
It also configures where the bundled script should be generated ('/dist/bundle.js').

*/

const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'scripts', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: [path.resolve(__dirname, 'scripts'), path.resolve(__dirname, 'components')],
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ]
          }
        }]
      }
    ]
  }
}