const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // externals: ['lodash'], //打包过程中如果遇到lodash就忽略掉，避免别人在使用我们的类库代码时安装两份lodash
  externals: {
    lodash: {
      root: '_', // 要求标签引入lodash时，名字为_
      commonjs: 'lodash' // 要求commonjs引入lodash时，名字为lodash
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'root', // 打包生成一个全局变量
    libraryTarget: 'umd', //通用模块定义，使其支持被不同模块语法引入。将打包出来的全局变量打包到全局作用域，可选参数：this, window, global
  },
}
