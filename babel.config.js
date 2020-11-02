const prodPlugins = []
// 当前环境为生产环境就移除console
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ...prodPlugins,
    // 解析懒加载
    '@babel/plugin-syntax-dynamic-import',
    [
      'import',
      {
        libraryName: 'view-design',
        libraryDirectory: 'src/components'
      }
    ]
  ]
}
