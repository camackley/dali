module.exports = {
  ssr: false,
  head: {
    title: "Mackley Carmona | Experienced Full-Stack Software Engineer Focused on User Experience",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: "description", property: "description", name: "description", content: "Full-stack software engineer with 4+ years experience designing & developing scalable solutions that prioritize user experience on web and mobile. Notable achievements include creating a hybrid codebase, designing a scalable user management system, and improving mobile app performance through clean architecture." },
      { hid: "og:type", property: "og:type", name: "og:type", content: "website" },
      { hid: "og:title", property: "og:title", name: "og:title", content: "Mackley Carmona | Experienced Full-Stack Software Engineer Focused on User Experience" },
      { hid: "og:description", property: "og:description", name: "og:description", content: "Full-stack software engineer with 4+ years experience designing & developing scalable solutions that prioritize user experience on web and mobile. Notable achievements include creating a hybrid codebase, designing a scalable user management system, and improving mobile app performance through clean architecture." },
      { hid: "og:image", property: "og:image", name: "og:image", content: "https://firebasestorage.googleapis.com/v0/b/dali-camackley.appspot.com/o/website%20assets%2FogImage.png?alt=media&token=f0b71d31-c143-44b8-8504-416797a59feb" },
      { hid: "og:image:width", property: "og:image:width", name: "og:image:width", content: "1200" },
      { hid: "og:image:height", property: "og:image:height", name: "og:image:height", content: "630" },
      { hid: "og:site_name", property: "og:site_name", name: "og:site_name", content: "CaMackley" },
      { hid: "og:url", property: "og:url", name: "og:url", content: "https://firebasestorage.googleapis.com/v0/b/dali-camackley.appspot.com/o/website%20assets%2FogImage.png?alt=media&token=f0b71d31-c143-44b8-8504-416797a59feb" },
      { hid: "twitter:title", property: "twitter:title", name: "twitter:title", content:  "Mackley Carmona | Experienced Full-Stack Software Engineer Focused on User Experience" },
      { hid: "twitter:image", property: "twitter:image", name: "twitter:image", content: "https://firebasestorage.googleapis.com/v0/b/dali-camackley.appspot.com/o/website%20assets%2FogImage.png?alt=media&token=f0b71d31-c143-44b8-8504-416797a59feb" },
      { hid: "twitter:card", property: "twitter:card", name: "twitter:card", content: "summary_large_image" },
      { hid: "twitter:domain", property: "twitter:domain", name: "twitter:domain", content: "camackley.com" },
      { hid: "google", property: "google", name: "google", content: "notranslate" },
      { hid: "robots", property: "robots", name: "robots", content: "index, follow" },
    ],
    link: [
      [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { hid: "canonical", rel: "canonical", href: "https://camackley.com" }
      ],
    ],
    __dangerouslyDisableSanitizers: ["script"],
  },
  styleResources: {
    scss: ['./assets/scss/variables.scss'],
  },
  css: [],
  plugins: [{ src: './plugins/FontLoader.ts', ssr: false }],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/device',
    '@nuxtjs/router-extras',
    '@nuxt/image',
  ],
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
    port: process.env.PORT || 3001
  },
}
