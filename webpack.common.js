const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(eot|ttf|svg)/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.jpg/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048,
          },
        },
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: ['**/*']}),
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000, //大于30k的代码会做代码分割
      maxSize: 0, //可配可不配
      minChunks: 1, //当一个模块被用了至少多少次的时候进行代码分割
      maxAsyncRequests: 5, //同时加载的代码文件是5
      maxInitialRequests: 3, //入口文件引入的代码库最多分割为3个文件
      automaticNameDelimiter: '~', //文件生成的时候文件名连接符
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vendors.js',
        },
        default: {
          priority: -20,
          reuseExistingChunk: false,
          filename: 'common.js',
        }
      },

    }
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
