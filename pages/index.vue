<template>
  <div class="container-odigo">
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
  </div>
</template>

<script>
  import AppMain from '~/components/main'
  import AppMobileMenu from '~/components/mobile-menu'
  import AppBenefitsOdigo from '~/components/benefits-of-odigo'
  import AppGetInspired from '~/components/get-inspired'
  import AppTodayTopPlaces from '~/components/today-top-places'
  import AppVideo from '~/components/video'
  import AppFooter from '~/components/footer'

export default {
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

  @import "~/assets/smart-grid.sass"
   
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

</style>
