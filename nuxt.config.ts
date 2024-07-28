import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';

export default defineNuxtConfig({
  ssr: false, // Disable SSR
  plugins: ['~/plugins/ionic.js'],
  srcDir: 'src/',
  generate: {
    dir: 'dist' // Output directory for the build
  },
  build: {
    transpile: ['@ionic/vue'],
    buildDir: 'dist'
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
    '~/static/dist/style.css',
    '@ionic/core/css/ionic.bundle.css'
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
  vue: {
    config: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('ion-')
      }
    }
  },
  typescript: {
    shim: false
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://restcountries.com/v3.1'
    }
  },
  compatibilityDate: '2024-07-24'
});
