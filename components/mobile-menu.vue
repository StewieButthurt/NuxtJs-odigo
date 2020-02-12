<template>
    <div class="mobile-menu" :class="{'mobile-menu-disabled' : statusMenu}">
        <div class="mobile-menu__links">
            <a href="#"  class="mobile-menu__link" v-scroll-to="'#Articles'"  @click="$emit('clickMobileMenuLink')">Articles</a>
            <a href="#" class="mobile-menu__link" v-scroll-to="'#Locations'" @click="$emit('clickMobileMenuLink')">Locations</a>
            <a href="#" class="mobile-menu__link" v-scroll-to="'#Videos'" @click="$emit('clickMobileMenuLink')">Videos</a>
            <nuxt-link no-prefetch to="/admin/home" class="mobile-menu__link">Sign in</nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
      props: [
          'statusMenu'
      ]
    }
</script>

<style lang="sass">
    @import "~/assets/smart-grid.sass"

    .mobile-menu
        position: fixed
        top: 0px
        width: 300px
        height: 100vh
        margin-left: -300px
        opacity: 0
        background: rgba(0,0,0,.9)
        display: flex
        padding-top: 100px
        z-index: 2
        transition: all 0.3s linear 
    
    .mobile-menu-disabled
        margin-left: 0px
        opacity: 1

    .mobile-menu__links
        display: flex
        flex-direction: column
        padding-left: 80px
        +lg-block
            padding-left: 74px

    #container-odigo .mobile-menu__link
        user-select: none
        text-decoration: none
        color: #b5b2b2
        font-size: 24px
        margin-top: 10px
        margin-right: 10px
        +lgX-block
            font-size: 18px
        
    #container-odigo .mobile-menu__link:hover
        color: white
        +xs-block
            color: #b5b2b2

    #container-odigo .mobile-menu__link:active
        +xs-block
            color: white
</style>