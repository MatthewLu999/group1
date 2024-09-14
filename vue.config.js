const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'), // Maps '@' to the 'src' directory
        '@css': path.resolve(__dirname, 'src/assets/css/'),
        '@img': path.resolve(__dirname, 'src/assets/images/'),
        '@js': path.resolve(__dirname, 'src/assets/js/')
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@css', path.resolve(__dirname, 'src/assets/css'))
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/capstoneproject1/'
    : '/'
})
