
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Amazing places in Japan' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/onigiri.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/fonts/lato.css' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    `~/plugins/scrollTo.js`,
    '~plugins/axios.js',
    { src: '~/plugins/player.js', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-lazy-load',
    '@nuxtjs/axios',
    'nuxt-vuex-localstorage',
    '@nuxtjs/recaptcha',
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  recaptcha: {
    // hideBadge: false, 
    language: 'ru',
    // siteKey: process.env.SITE_KEY, 
    siteKey: '6LdjR9cUAAAAAHKeibDYlciyXLwHG1XG9yeU-LVB', 
    version: 2,
    size: 'normal'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

}
