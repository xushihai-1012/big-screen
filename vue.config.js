/*
 * @Author: your name
 * @Date: 2020-09-14 00:15:40
 * @LastEditTime: 2020-10-14 11:26:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \big-screen\vue.config.js
 */
const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 关闭.map文件
  // productionSourceMap: false,
  // 不开启eslint检查
  lintOnSave: false,
  chainWebpack: config => {
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main-pro.js')

      // config.devtool('false')

      // 通过externals使用cdn加载外部资源
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        // lodash: '_',
        echarts: 'echarts',
        vuex: 'Vuex'
      })

      config.plugin('html').tap(args => {
        args[0].isProd = true
        args[0].title = '广汽质量综合管理大屏'
        return args
      })

      // 开启gzip传输
      config.plugin('CompressionPlugin').use(new CompressionPlugin({
        filename: '[path].gz[query]',
        test: productionGzipExtensions,
        threshold: 10240,
        algorithm: 'gzip',
        deleteOriginalAssets: false
      }))
    })

    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main-dev.js')

      config.plugin('html').tap(args => {
        args[0].isProd = false
        args[0].title = '开发环境-广汽质量综合管理大屏'
        return args
      })
    })
  }

  // devServer: {
  //   proxy: {
  //     // 匹配的规则
  //     '/api': {
  //       // 访问的跨域地址
  //       target: process.env.NODE_ENV,
  //       // 是否开启websockets
  //       ws: true,
  //       // 使用的是http协议则设置为false，https协议则设置为true
  //       secure: false,
  //       // 开启代理
  //       changOrigin: true,
  //       pathRewrite: {
  //         '^/api': '/api'
  //       }
  //     }
  //   }
  // }
}
