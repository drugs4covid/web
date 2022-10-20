const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false
    }
  },
  chainWebpack: config => {
    config.module
        .rule('raw')
        .test(/\.bib$/)
        .use('raw-loader')
        .loader('raw-loader')
        .end()
  },
})
