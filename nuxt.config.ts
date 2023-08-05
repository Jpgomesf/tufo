import { createResolver } from '@nuxt/kit'
import vuetify from 'vite-plugin-vuetify'
const { resolve } = createResolver(import.meta.url)
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: false },
  // hooks: {
  //   'vite:extendConfig': (config) => {
  //     config.plugins?.push(
  //       vuetify({
  //         styles: { configFile: resolve('./src/assets/style/main.sass') },
  //       })
  //     )
  //   }
  // }
})
