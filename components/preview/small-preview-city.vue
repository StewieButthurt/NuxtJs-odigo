<template>
    <v-lazy
        v-model="isActive"
        :options="{
            threshold: .5
        }"
        class="lazy-today-top-city"
        transition="fade-transition"
    >
        <div class="today-top-city">
            <nuxt-link no-prefetch :to="`/${title}`" class="today-top-city__img" @mouseover.native="todayTopCity = true" @mouseleave.native="todayTopCity = false">
                <div class="edit-city__img-card" :style="{ backgroundImage: `url(${imgMini})`, backgroundPosition: 'center center', backgroundSize: 'cover' }" :class="{'today-top-city__img-hover' : todayTopCity}"></div>
                <div class="today-top-city__title-mask">
                    <div class="today-top-city__title-mask-text">
                        {{title}}
                    </div>
                </div>
            </nuxt-link >
            <div class="today-top-city__descr">
                {{descrSmall}}
            </div>
            <v-spacer />
            <v-row>
                <v-col cols="12" sm="6" md="6">
                    <v-btn :disabled="!seeMoreButton" :nuxt="true" :to="`/${title}`" id="today-top-city__button" @click="seeMore()">see more</v-btn>
                </v-col>
            </v-row>
        </div>
    </v-lazy>
</template>

<script>
    export default {
        data() {
            return {
                todayTopCity: false,
                isActive: false
            }
        },
        props: [
            'title',
            'img',
            'descr',
            'seeMoreButton'
        ],
        computed: {
            descrSmall() {
                if(this.descr.length > 120) {
                    let text = ''
                    for (let i = 0; i < 120; i++) {
                        text = text + this.descr[i]
                    }
                    return text + '...'
                } else {
                    return this.descr
                }
                
            },
            imgMini() {
                return this.img
            }
        }
    }
</script>

<style lang="sass">

    .today-top-city
        width: 100%
        display: flex
        flex-direction: column
        +xs-block
            align-items: center
        
    .lazy-today-top-city
        +size(3.6)
        +size-md(5.8)
        +size-xs(12)
        margin-top: 42px
        margin-bottom: 77px
        display: flex
        flex-direction: column
        +lgX-block
            margin-top: 32px
            margin-bottom: 29px
        +xs-block
            align-items: center
            margin-bottom: 60px
            width: 100%
    
    .today-top-city__img
        width: 100%
        cursor: pointer
        overflow: hidden
        display: flex
        position: relative

    .today-top-city__img img
        width: 100%
        transition-duration: 0.4s

    .today-top-city__descr
        margin-top: 60px
        font-size: 21px
        min-height: 96px
        position: relative
        color: #102746
        line-height: 24px
        overflow: hidden
        +size-xs(10)
        +lgX-block
            margin-top: 45px
            font-size: 16px
        +xs-block
            text-align: center
            min-height: inherit


    #today-top-city__button
        color: white
        background-color: #006DFE
        margin-top: 30px
        border-radius: 0px
        width: 157px
        height: 56px
        transition-duration: 0.3s
        +lgX-block
            width: 118px
            height: 42px
        +lg-block
            margin-top: 0px
        +md-block
            margin-top: 15px
    
    .today-top-city__button:hover
        transform: scale(0.9)
        +md-block
            transform: none
    
    .today-top-city__button:active
        transform: scale(0.8)
    
    .today-top-city__title-mask
        position: absolute
        display: flex
        justify-content: space-between
        align-content: center
        flex-wrap: wrap
        width: 100%
        height: 14%
        background: rgba(21, 24, 36, 0.6)
        bottom: 0px
        padding-left: 7%
        padding-right: 7%

    .today-top-city__title-mask-text
        font-size: 24px
        text-transform: uppercase
        color: white
        +lgX-block
            font-size: 18px
    
    .today-top-city__title-mask-counts
        display: flex
        align-content: center
        flex-wrap: wrap

    .today-top-city__title-mask-counts-like
        display: flex
        align-items: center
        margin-right: 18px
        color: white
        font-size: 18px
        +lgX-block 
            font-size: 16px
            margin-right: 14px
    
    .today-top-city__title-mask-counts-like svg
        width: 21px
        height: 20px
        margin-left: 7px
        +lgX-block
            width: 16px
            height: 15px
            margin-left: 6px
    
    .today-top-city__title-mask-counts-comments
        display: flex
        align-items: center
        color: white
        font-size: 18px
        +lgX-block
            font-size: 16px

    .today-top-city__title-mask-counts-comments svg
        width: 18px
        height: 18px
        margin-left: 12px
        +lgX-block
            width: 14px
            height: 14px
            margin-left: 9px
    
    .today-top-city__img-hover
        transform: scale(1.1)
    
    .button-disabled-margin
        margin-top: 30px
    
    .login__button
        border-radius: 0px
    
    .edit-city__img-card
        width: 100%
        padding-top: 100%
        transition-duration: 0.4s
</style>