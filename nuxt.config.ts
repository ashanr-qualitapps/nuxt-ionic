import { resolve } from 'path';

export default defineNuxtConfig({
  // Ensure SSR is enabled
  ssr: true,

  srcDir: 'src/',

  build: {
    transpile: ['vue-shared-components']
  },

  alias: {
    '@': resolve(__dirname, './src'),
    '~~': resolve(__dirname, './src'),
    '~': resolve(__dirname, './src'),
    '@components': resolve(__dirname, './src/components'),
    '@layouts': resolve(__dirname, './src/layouts'),
    '@pages': resolve(__dirname, './src/pages'),
    '@plugins': resolve(__dirname, './src/plugins'),
    '@static': resolve(__dirname, './src/static'),
    '@store': resolve(__dirname, './src/store'),
    '@assets': resolve(__dirname, './src/assets')
  },

  css: [
    '~/static/dist/style.css' // Add the library's CSS
  ],

  app: {
    head: {
      title: 'nuxt-app',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My Nuxt.js SSR application' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2024-07-17'
});