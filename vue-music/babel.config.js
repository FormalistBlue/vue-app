module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
      ['import', {
          libraryName: 'vant',
          libraryDirectory: 'es',
          style: true
      }, 'vant']
  ]
}

//  babel 转换器的 配置文件  处理ES6&ES7语法