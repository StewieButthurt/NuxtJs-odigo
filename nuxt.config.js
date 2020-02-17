
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
      { hid: 'keywords', name:'keywords', content: 'places in Japan, travel, japan, tours, the trip' },
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
    { src: '~assets/fonts/lato.css' },
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
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '57539785',
        webvisor: true,
        // clickmap:true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ],
    ['nuxt-seo-module', {
      robots: {
        // ROBOTS.TXT options
        UserAgent: '*',
        CrawlDelay: '',
        Disallow: ['/admin', '/login'],
        Allow: ''
      },
      sitemap: [{
        generate: true
      }]
    }],
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  styleResources: {
    sass: [
     '~/assets/smart-grid.sass', // путь к вашему файлу
    ],
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
