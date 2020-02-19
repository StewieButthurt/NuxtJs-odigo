<template>
  <div class="container-odigo">
    <v-app id="container-odigo">
      <div class="wrapper">
        <app-mobile-menu 
            :statusMenu="statusMenu"
            @clickMobileMenuLink="clickMobileMenuLink()"
        />
        <app-main 
          :statusMenu="statusMenu"
          @clickMenu="clickMenu()"
          @onClickOutside="clickMobileMenuLink"
        />
        <app-benefits-odigo />
        <app-get-inspired />
        <app-today-top-places />
        <app-video />
        <app-footer />
      </div>
    </v-app>
  </div>
</template>

<script>
  const AppMain = () => import('~/components/main')
  const AppMobileMenu = () => import('~/components/mobile-menu')
  const AppBenefitsOdigo = () => import('~/components/benefits-of-odigo')
  const AppGetInspired = () => import('~/components/get-inspired')
  const AppTodayTopPlaces = () => import('~/components/today-top-places')
  const AppVideo = () => import('~/components/video')
  const AppFooter = () => import('~/components/footer')

export default {
  head: {
    title: 'Travel with Odigo | Home',
    meta: [
      {hid: 'homepage-description', name: 'description', content: 'Best trips to Japan. Visit the beautiful places of Japan with Odigo'},
      {hid: 'homepage-keywords', name: 'keywords', content: 'best trips, japan, places in japan, tours'}
    ]
  },
  data() {
    return {
      statusMenu: false
    }
  },
  components: {
    AppMain,
    AppMobileMenu,
    AppBenefitsOdigo,
    AppGetInspired,
    AppTodayTopPlaces,
    AppVideo,
    AppFooter
  },
  async fetch ({ store, $axios}) {
    let city = await $axios.$get('/api/city')
    store.commit('city/setCity', city)
  },
  methods: {
    clickMenu() {
      this.statusMenu = !this.statusMenu
    },
    clickMobileMenuLink() {
      this.statusMenu = false
    }
  }
}
</script>

<style lang="sass">

   
  .container-odigo
    width: 100%
    background-color: #F2F2F2
    position: relative

  .wrapper
    max-width: 1920px
    width: 100%
    margin: 0 auto
    position: relative
    font-family: 'Lato-Regular', sans-serif
    font-weight: 500
    background-color: white
  
  .v-application a
    color: white

</style>
