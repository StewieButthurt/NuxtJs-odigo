<template>
    <div class="today-top-city">
        <div class="today-top-city__img" @mouseover="todayTopCity = true" @mouseleave="todayTopCity = false">
            <div class="today-top-city__img-padding-bottom">
                <div class="today-top-city__img-position">
                    <img :class="{'today-top-city__img-hover' : todayTopCity}" :src="require(`../assets/${img}` )" :alt="title">
                </div>
                <div class="today-top-city__title-mask">
                    <div class="today-top-city__title-mask-text">
                        {{title}}
                    </div>
                </div>
            </div>
        </div>
        <div class="today-top-city__descr">
            {{descrSmall}}
        </div>
        <div class="today-top-city__button">
            <span>see more</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                todayTopCity: false
            }
        },
        props: [
            'title',
            'img',
            'descr'
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
                
            }
        }
    }
</script>

<style lang="sass">

    .today-top-city
        +size(3.6)
        +size-md(5.8)
        margin-top: 42px
        margin-bottom: 77px
        display: flex
        flex-direction: column
        +lgX-block
            margin-top: 32px
            margin-bottom: 29px
        +xs-block
            width: 100%
            align-items: center
            margin-bottom: 60px
    
    .today-top-city__img
        width: 100%
        cursor: pointer

    .today-top-city__img-padding-bottom
        padding-bottom: 100%
        width: 100%
        position: relative
    
    .today-top-city__img-position
        position: absolute
        width: 100%
        height: 100%
        overflow: hidden
    
    .today-top-city__img-position img   
        width: 100%
        height: 100%
        transition-duration: 0.4s
    
    .today-top-city__descr
        margin-top: 60px
        font-size: 21px
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


    .today-top-city__button
        display: flex
        justify-content: center
        align-content: center
        flex-wrap: wrap
        color: white
        margin-top: 31px
        user-select: none
        text-transform: uppercase
        background-color: #006DFE
        width: 157px
        height: 56px
        cursor: pointer
        transition-duration: 0.3s
        +lgX-block
            width: 118px
            height: 42px
            margin-top: 41px
    
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
</style>