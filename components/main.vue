<template>
    <div class="main">
        <app-main-navigation 
            @onClickOutside="onClickOutside()"
            :statusMenu="statusMenu"
            @clickMenu="$emit('clickMenu')"
        />
        <div class="main__descr">
            <h1>Discover Amazing places in Japan</h1>
            <h3>Jump off balcony, onto stranger's head. Chase ball of string hide when guests
             come over. Being gorgeous with belly side up i could pee on this if i had the
             energy but under the bed, for attack the child, open the door</h3>
            <v-btn  id="main__button" class="white--text" v-scroll-to="'#Locations'">select</v-btn>
        </div>
    </div>
</template>

<script>
    import AppMainNavigation from '~/components/main-navigation'
    export default {
        data() {
            return {
                
            }
        },
        props: [
            'statusMenu'
        ],
        components: {
            AppMainNavigation
        },
        methods: {
            onClickOutside(event) {
                this.$emit('onClickOutside')
            }
        }
    }
</script>

<style lang="sass">

    .main 
        width: 100%
        background: linear-gradient(180deg, rgba(53, 66, 103, 0.0001) -68%, #151824 95.04%), url('../assets/main.jpg') no-repeat 
        background-size: cover
        background-position: 50%
        display: flex
        flex-direction: column
        align-items: center
        font-family: 'Lato-Regular', sans-serif
        font-weight: 500
        min-height: 962px
        position: relative
        +md-block
            min-height: 830px
        +xs-block
            min-height: 680px

    .main__descr
        +size(8)
        +size-lg(9)
        display: flex
        flex-direction: column
        color: white
        margin-top: 130px
        +lg-block
            margin-top: 156px
        +md-block
            align-items: center
            text-align: center
            margin-top: 110px
        +ms-block
            margin-top: 80px
    
    .main__descr h1
        font-size: 66px
        font-family: 'Lato-Regular', sans-serif
        font-weight: 500
        max-width: 800px
        +lgX-block
            font-size: 50px
            max-width: 700px
        +lg-block
            font-size: 44px
            max-width: 600px
        +md-block
            max-width: 500px
        +xs-block
            font-size: 27px

    
    .main__descr h3
        font-size: 21px
        margin-top: 22px
        line-height: 24px
        color: #FFFFFF
        font-family: 'Lato-Light', sans-serif
        font-weight: 300
        max-width: 700px
        +lgX-block
            font-size: 16px
            max-width: 550px
        +md-block
            max-width: 400px
        +xs-block
            font-size: 13px
    
    #main__button
        width: 228px
        height: 77px
        background-color: #1B7DFF
        font-size: 32px
        margin-top: 69px
        transition-duration: 0.3s
        border-radius: 0px
        +lgX-block
            width: 171px
            height: 58px
            font-size: 24px
        +lg-block
            width: 152px
            height: 51px
            font-size: 21px
            margin-top: 50px
        +md-block
            margin-top: 45px
            width: 97px
            height: 39px
            font-size: 14px
    
    .main__button-menu-mobile-wrapper
        display: flex
        width: 54px
        height: 54px
        justify-content: center
        align-content: center
        flex-wrap: wrap
        align-items: center
        cursor: pointer
        border-radius: 50px
        margin-right: 10px
        transition: transform 0.4s linear, background 0.1s linear
        -webkit-box-orient: vertical
        -webkit-box-direction: normal
        -ms-flex-direction: column
        flex-direction: column
        -webkit-box-align: center
        -ms-flex-align: center
        align-items: center
        +lg-block
            position: fixed
            top: 44px
            margin-left: -52px

    .main__button-menu-mobile-wrapper:hover
        background: rgba(0,0,0,.2)
        transition: background 0.1s linear
    
    
    .main__button-menu-mobile-wrapper-click-animation
        transform: scale(1)
    
    

    
</style>