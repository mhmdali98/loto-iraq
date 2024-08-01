// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';
import languages from './lang/languages'
import theme from './config/theme'
import brand from './assets/text/brand'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: brand.movie.name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: brand.movie.desc },
        { name: 'msapplication-TileColor', content: '#FFFFFF' },
        { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' },
        // PWA primary color
        { name: 'theme-color', content: theme.primary},
        // Facebook
        { property: 'author', content: 'luxi' },
        { property: 'og:site_name', content: 'luxi.ux-maestro.com' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        // Twitter
        { property: 'twitter:site', content: 'luxi.ux-maestro.com' },
        { property: 'twitter:domain', content: 'luxi.ux-maestro.com' },
        { property: 'twitter:creator', content: 'luxi' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:image:src', content: '/images/logo.png' },
        { property: 'og:url', content: brand.movie.url },
        { property: 'og:title', content: brand.movie.projectName },
        { property: 'og:description', content: brand.movie.desc },
        { name: 'twitter:site', content: brand.movie.url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: brand.movie.img },
        { property: 'og:image', content: brand.movie.img },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ],
      link: [
        // Favicon
        { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
       
        // Fonts and Icons
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cairo:400,600,700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css' }
        
      ]
    },
  },
  components: false,
  css: [
    'aos/dist/aos.css',
    'vuetify/lib/styles/main.sass',
    '@splidejs/vue-splide/css',
    '@/assets/scss/vuetify-overide.scss',
    '@/assets/scss/transition.scss',
    '@/assets/scss/vendors/animate.css',
    '@/assets/scss/vendors/animate-extends.css',
    '@/assets/scss/vendors/hamburger-menu.css',
  ],
  modules: ['@nuxtjs/i18n', 'vite-plugin-eslint', "nuxt3-leaflet","@pinia/nuxt"],
  i18n: {
    locales: languages,
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'ar',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    vueI18n: './config/i18n.js', // use this options for next vueI18n version
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "@/assets/scss/styles.scss";` } // eslint-disable-line
      }
    },
    plugins: [
      // eslintPlugin(),
    ]
  },
  build: {
    transpile: ['vuetify'],
    extend(config) {
      config.performance.hints = false
    },
  },
  devServer: {
    port: 8010
  }
})