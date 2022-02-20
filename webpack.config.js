const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = true

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: {
    app: './src/app/app.ts',
    admin: './src/admin/admin.ts',
    styles: './src/scss/app.scss'
    // hot: 'webpack/hot/dev-server.js',
    // client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    // contentBase: path.resolve(__dirname, './dist'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(s(a|c)ss)$/,
        exclude: [/node_modules/],
        use: [
          // MiniCssExtractPlugin.loader,
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', 'ts', '.js', '.scss', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}
