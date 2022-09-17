export default {
  ssr: false,
  head: {
    title: 'Mackley Carmona | Software engineer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  styleResources: {
    scss: ['./assets/scss/variables.scss'],
  },
  css: [],
  plugins: [{ src: './plugins/FontLoader.ts', ssr: false }],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/device'],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxt/content'],
  axios: {
    baseURL: '/',
  },
  compilerOptions: {
    types: ['@nuxt/types', '@nuxtjs/device'],
  },
  content: {},
  build: {},
  server: {
    port: process.env.PORT || 3001,
  },
}
