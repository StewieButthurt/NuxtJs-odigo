<template>
    <div class="get-inspired">
        <div class="get-inspired__header">
            <h2>
                <span class="get-inspired__header-border">Get inspired for your</span>
                 next trip
            </h2>
        </div>
        <div class="get-inspired__cityes-wrapper">
            <div class="get-inspired__cityes full" @mouseover="mountFuji = true" @mouseleave="mountFuji = false">
                <div class="get-inspired__cityes-width" @click="clickImg('/Mount Fuji')">
                    <div class="get-inspired__cityes-padding-bottom 
                                get-inspired__cityes-padding-bottom-full">
                        <div class="get-inspired__cityes-position" :class="{'get-inspired__cityes-position-hover' : mountFuji}">
                            <img src="~/assets/mount-fuji.png" alt="mount-fuji">
                        </div>
                        <div class="get-inspired__cityes-mask">
                        </div>
                        <div class="get-inspired__cityes-title">
                            Mount Fuji
                        </div>
                    </div>
                </div>
            </div>
            <div class="get-inspired__cityes full" @mouseover="kyoto = true" @mouseleave="kyoto = false">
                <div class="get-inspired__cityes-width" @click="clickImg('/Kyoto')">
                    <div class="get-inspired__cityes-padding-bottom 
                                get-inspired__cityes-padding-bottom-full">
                        <div class="get-inspired__cityes-position" :class="{'get-inspired__cityes-position-hover' : kyoto}">
                            <img src="~/assets/kyoto.png" alt="kyoto">
                        </div>
                        <div class="get-inspired__cityes-mask">
                        </div>
                        <div class="get-inspired__cityes-title">
                            Kyoto
                        </div>
                    </div>
                </div>
            </div>
            <div class="get-inspired__cityes small" @mouseover="tokyo = true" @mouseleave="tokyo = false">
                <div class="get-inspired__cityes-width" @click="clickImg('/Tokyo')">
                    <div class="get-inspired__cityes-padding-bottom">
                        <div class="get-inspired__cityes-position" :class="{'get-inspired__cityes-position-hover' : tokyo}">
                            <img src="~/assets/tokyo.png" alt="tokyo">
                        </div>
                        <div class="get-inspired__cityes-mask">
                        </div>
                        <div class="get-inspired__cityes-title">
                            Tokyo
                        </div>
                    </div>
                </div>
            </div>
            <div class="get-inspired__cityes small" @mouseover="nigata = true" @mouseleave="nigata = false">
                <div class="get-inspired__cityes-width" @click="clickImg('/Niigata')">
                    <div class="get-inspired__cityes-padding-bottom">
                        <div class="get-inspired__cityes-position" :class="{'get-inspired__cityes-position-hover' : nigata}">
                            <img src="~/assets/nigata.png" alt="nigata">
                        </div>
                        <div class="get-inspired__cityes-mask">
                        </div>
                        <div class="get-inspired__cityes-title">
                            Niigata
                        </div>
                    </div>
                </div>
            </div>
            <div class="get-inspired__cityes small" @mouseover="sapporo = true" @mouseleave="sapporo = false">
                <div class="get-inspired__cityes-width" @click="clickImg('/Sapporo')">
                    <div class="get-inspired__cityes-padding-bottom">
                        <div class="get-inspired__cityes-position" :class="{'get-inspired__cityes-position-hover' : sapporo}">
                            <img src="~/assets/sapporo.png" alt="sapporo">
                        </div>
                        <div class="get-inspired__cityes-mask">
                        </div>
                        <div class="get-inspired__cityes-title">
                            Sapporo
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="get-inspired__prefecture-in-focus">
            <div class="get-inspired__prefecture-in-focus-img">
                <div class="get-inspired__cityes-width">
                    <div class="get-inspired__prefecture-in-focus-padding-bottom">
                        <div class="get-inspired__cityes-position">
                            <img src="~/assets/tottori.png" alt="tottori">
                        </div>
                    </div>
                </div>
            </div>
            <div class="get-inspired__prefecture-in-focus-descr" id="Articles">
                <div class="get-inspired__prefecture-in-focus-descr-title">
                    Prefecture in Focus: Tottori
                </div>
                <div class="get-inspired__prefecture-in-focus-descr-subtitle">
                    Jump off balcony, onto stranger's head. Chase ball of string hide when 
                    guests come over. Being gorgeous with belly side up i could pee on this if i 
                    had the energy but under the bed, for attack the child, open the door
                </div>
                <div class="get-inspired__prefecture-in-focus-descr-link" @mouseover="getInspiredPrefectureLink = true" @mouseleave="getInspiredPrefectureLink = false" @click="getInspiredPrefectureLink = false">
                    <a href="#">
                        view prefecture
                        <span class="benefits-of-odigo__advantages-link-border" :class="{'main__menu-links-border-animation' : getInspiredPrefectureLink, 'main__menu-links-border-animation-leave' : getInspiredPrefectureLink === false}"></span>
                    </a>
                    <svg viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.7706 3H0V5H24.7706V8L33 4L24.7706 0V3Z" fill="#006DFE"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="get-inspired__prefecture-in-focus get-inspired__kyotos-arashiyama">
            <div class="get-inspired__prefecture-in-focus-descr get-inspired__kyotos-arashiyama-descr">
                <div class="get-inspired__prefecture-in-focus-descr-title get-inspired__kyotos-arashiyama-title">
                    Featured Neighborhood: 
                    Kyoto’s Arashiyama
                </div>
                <div class="get-inspired__prefecture-in-focus-descr-subtitle">
                    Jump off balcony, onto stranger's head. Chase ball of string hide when 
                    guests come over. Being gorgeous with belly side up i could pee on this if i 
                    had the energy but under the bed, for attack the child, open the door
                </div>
                <div class="get-inspired__prefecture-in-focus-descr-link get-inspired__kyotos-arashiyama-descr-link" @mouseover="getInspiredKyotosLink = true" @mouseleave="getInspiredKyotosLink = false" @click="getInspiredKyotosLink = false">
                    <a href="#">
                        view neighborhood
                        <span class="benefits-of-odigo__advantages-link-border" :class="{'main__menu-links-border-animation' : getInspiredKyotosLink, 'main__menu-links-border-animation-leave' : getInspiredKyotosLink === false}"></span>
                    </a>
                    <svg viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.7706 3H0V5H24.7706V8L33 4L24.7706 0V3Z" fill="#006DFE"/>
                    </svg>
                </div>
            </div>
            <div class="get-inspired__prefecture-in-focus-img">
                <div class="get-inspired__cityes-width">
                    <div class="get-inspired__prefecture-in-focus-padding-bottom">
                        <div class="get-inspired__cityes-position">
                            <img src="~/assets/kyotos-arashiyama.png" alt="tottori">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                getInspiredLink: false,
                mountFuji: false,
                kyoto: false,
                tokyo: false,
                nigata: false,
                sapporo: false,
                getInspiredPrefectureLink: false,
                getInspiredKyotosLink: false
            }
        },
        methods: {
            clickImg(path) {
                this.$router.push(path)
            }
        }
    }
</script>

<style lang="sass">
    @import "~/assets/smart-grid.sass"

    .get-inspired
        width: 100%
        +size(10.5)
        display: flex
        position: relative
        top: -50px
        flex-direction: column
        align-items: center
        margin: 0 auto
        +lgX-block
            top: -80px
        +xs-block
            top: -30px
            width: 100%

    .get-inspired__header
        width: 100%
        display: flex
        justify-content: space-between
        +ms-block
            flex-direction: column
            justify-content: inherit
            align-items: center

    .get-inspired__header h2
        font-size: 40px
        color: #102746
        display: flex
        flex-wrap: wrap
        justify-content: center
        +lgX-block
            font-size: 35px
        +xs-block
            font-size: 22px
            text-align: center
    
    .get-inspired__header-border
        border-bottom: 3px solid #006DFE
        height: 60px
        display: flex
        margin-right: 10px
        +lgX-block
            border-bottom: 2px solid #006DFE
        +xs-block
            height: 50px
            margin-right: 5px
            height: 34px
            border-bottom: 1px solid #006DFE
    
    .get-inspired__header-link
        display: flex
        justify-content: space-between
        align-items: center
        width: 174px
        cursor: pointer
        color: #2884ff
        +lgX-block
            width: 131px
        +ms-block
            margin-top: 39px
        +xs-block
            margin-top: 20px

    .get-inspired__header-link a
        font-size: 21px
        display: flex
        flex-direction: column
        text-decoration: none
        color: inherit
        align-items: center
        text-transform: uppercase
        +lgX-block
            font-size: 16px
    
    .get-inspired__header-link:hover
        color: #006dff

    .get-inspired__header-link svg
        width: 44px
        height: 10px
        +lgX-block
            width: 33px
            height: 8px
    
    .get-inspired__cityes-wrapper
        width: 100%
        display: flex
        flex-wrap: wrap
        margin-top: 48px
        background-color: #e0e0e2
        justify-content: space-between
        +lgX-block
            margin-top: 36px
        +ms-block
            justify-content: center


    .get-inspired__cityes
        cursor: pointer
        overflow: hidden
    
    .get-inspired__cityes-width
        width: 100%
    
    .get-inspired__cityes-padding-bottom
        padding-bottom: 68%
        width: 100%
        position: relative

    .get-inspired__cityes-position
        position: absolute
        width: 100%
        height: 100%
        transition: 0.5s

    .get-inspired__cityes-position-hover
        transform: scale(1.1)
    
    .get-inspired__cityes-position img
        width: 100%
        height: 100%

    .get-inspired__cityes-title
        position: absolute
        bottom: 9.7%
        left: 7.7%
        font-size: 50px
        color: white
        z-index: 1
        +lg-block
            font-size: 44px
        +md-block
            font-size: 34px
        +xs-block
            font-size: 20px

    
    .get-inspired__cityes-mask
        position: absolute
        left: 0px
        top: 0px
        width: 100%
        height: 100%
        background: rgba(21, 24, 36, 0.4)
    
    .small
        margin-top: 0.3%
        +size(4.03)
        +size-lgX(4.06)
        +size-md(4.1)
        +size-ms(12)
        +md-block
            margin: 4px 0px 4px 0px
        +xs-block
            width: 100%

    .full
        margin-bottom: 0.3%
        +size(6.04)
        +size-lgX(6.06)
        +size-md(6.1)
        +size-ms(12)
        +md-block
            margin: 4px 0px 4px 0px
        +xs-block
            width: 100%
    
    .get-inspired__cityes-padding-bottom-full
        padding-bottom: 57.47%

    .get-inspired__prefecture-in-focus
        width: 100%
        display: flex
        margin-top: 174px
        +size-ms(12)
        +lgX-block
            margin-top: 131px
        +lg-block
            margin-top: 116px
        +md-block
            margin-top: 90px
            flex-direction: column
            align-items: center
        +xs-block
            width: 100%


    .get-inspired__prefecture-in-focus-img
        +size(6)
        +md-block
            width: 100%
    
    .get-inspired__prefecture-in-focus-padding-bottom
        padding-bottom: 59%
        width: 100%
        position: relative
    
    .get-inspired__prefecture-in-focus-descr
        +size(6)
        +size-md(12)
        +size-xs(10)
        display: flex
        flex-direction: column
        padding-left: 8%
        +md-block
            padding-left: 0px

    .get-inspired__prefecture-in-focus-descr-title
        font-size: 40px
        line-height: 40px
        margin-top: 34px
        color: #102746
        font-weight: 500
        +lgX-block
            font-size: 30px
            margin-top: 26px
        +lg-block
            font-size: 26px
            margin-top: 0px
        +md-block
            font-size: 20px
            margin-top: 40px

    .get-inspired__prefecture-in-focus-descr-subtitle
        font-size: 21px
        margin-top: 113px
        line-height: 24px
        max-width: 690px
        color: #102746
        +lgXX-block
            margin-top: 75px
        +lgX-block
            font-size: 16px
            margin-top: 55px
        +lg-block
            margin-top: 40px
        +md-block
            margin-top: 35px
    
    .get-inspired__prefecture-in-focus-descr-link
        display: flex
        justify-content: space-between
        align-items: center
        text-transform: uppercase
        width: 280px
        cursor: pointer
        color: #2884ff
        margin-top: 11%
        +lgX-block
            width: 210px
        +lg-block
            margin-top: 8%
        +md-block
            margin-top: 40px
    
    .get-inspired__prefecture-in-focus-descr-link a
        font-size: 21px
        display: flex
        flex-direction: column
        text-decoration: none
        color: inherit
        align-items: center
        text-transform: uppercase
        +lgX-block
            font-size: 16px
    
    .get-inspired__prefecture-in-focus-descr-link:hover
        color: #006dff

    .get-inspired__prefecture-in-focus-descr-link svg
        width: 44px
        height: 10px
        +lgX-block
            width: 33px
            height: 8px
    
    .get-inspired__kyotos-arashiyama
        margin-top: 102px
        +lgX-block
            margin-top: 77px
    
    .get-inspired__kyotos-arashiyama-descr
        padding-left: 0px
        padding-right: 8%
        +md-block
            order: 1
    
    .get-inspired__kyotos-arashiyama-title
        width: 500px
        +lgX-block
            width: 400px
        +lg-block
            width: 300px
        +md-block
            width: auto
    
    .get-inspired__kyotos-arashiyama-descr-link
        width: 325px
        +lgX-block
            width: 244px
</style>