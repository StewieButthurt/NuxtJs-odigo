<template>
    <div class="large-preview-city" v-click-outside="clickOutside">
        <div class="large-preview-city__title">
            <span>{{title}}</span>
        </div>
        <div class="large-preview-city__images">
            <div class="large-preview-city__images-list">
                <div class="large-preview-city__image large-preview-city__image-mrb" 
                    @mouseover="hoverImg1 = true" 
                    @mouseleave=" clickImg1 === true ? hoverImg1 = true : hoverImg1 = false"
                    :class="{'large-preview-city__img-click' : clickImg1}"
                    @click="imgClick1()"
                    >
                    <img 
                        :src="previewImg1" 
                        :alt="`${title}-mini`" 
                        :class="{'large-preview-city__img-hover' : hoverImg1}"
                    >
                    <span class="large-preview-city__image-mask" 
                        :class="{'large-preview-city__image-mask-disabled' : hoverImg1}"
                    >
                        </span>
                </div>
                <div class="large-preview-city__image large-preview-city__image-mrb" 
                    @mouseover="hoverImg2 = true" 
                    @mouseleave=" clickImg2 === true ? hoverImg2 = true : hoverImg2 = false"
                    :class="{'large-preview-city__img-click' : clickImg2}"
                    @click="imgClick2()"
                    >
                    <img 
                        :src="previewImg2" 
                        :alt="`${title}-mini`" 
                        :class="{'large-preview-city__img-hover' : hoverImg2}"
                    >
                    <span class="large-preview-city__image-mask" 
                        :class="{'large-preview-city__image-mask-disabled' : hoverImg2}"
                        >
                        </span>
                </div> 
                <div class="large-preview-city__image" 
                    @mouseover="hoverImg3 = true" 
                    @mouseleave=" clickImg3 === true ? hoverImg3 = true : hoverImg3 = false"
                    :class="{'large-preview-city__img-click' : clickImg3}"
                    @click="imgClick3()"
                    >
                    <img 
                        :src="previewImg3" 
                        :alt="`${title}-mini`" 
                        :class="{'large-preview-city__img-hover' : hoverImg3}">
                    <span class="large-preview-city__image-mask" 
                        :class="{'large-preview-city__image-mask-disabled' : hoverImg3}"
                    >
                        </span>
                </div> 
            </div>
            <div class="large-preview-city__image-main" 
                :style="getBackground"
            >
            </div>
        </div>
        <div class="large-preview-city__title large-preview-city__about">
            About the place
        </div>
        <div class="large-preview-city__descr">
            {{descr}}
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'descr',
            'previewImg'
        ],
        data() {
            return {
                mainImg: this.previewImg[0],
                hoverImg1: false,
                hoverImg2: false,
                hoverImg3: false,
                clickImg1: false,
                clickImg2: false,
                clickImg3: false
            }
        },
        computed: {
            getBackground() {
                return 'background-image: url(' + this.mainImgComputed + '); background-size: cover;';
            },
            previewImg1() {
                return this.previewImg[1]
            },
            previewImg2() {
                return this.previewImg[2]
            },
            previewImg3() {
                return this.previewImg[3]
            },
            mainImgComputed() {
                return this.mainImg
            }
        },
        methods: {
            imgClick1() {
                this.hoverImg1 = true, 
                this.clickImg1 = true, 
                this.clickImg2 = false, 
                this.clickImg3 = false,
                this.hoverImg2 = false,
                this.hoverImg3 = false,
                this.mainImg = this.previewImg[1]
            },
            imgClick2() {
                this.hoverImg2 = true, 
                this.clickImg2 = true, 
                this.clickImg1 = false, 
                this.clickImg3 = false,
                this.hoverImg1 = false,
                this.hoverImg3 = false,
                this.mainImg = this.previewImg[2]
            },
            imgClick3() {
                this.hoverImg3 = true, 
                this.clickImg3 = true, 
                this.clickImg1 = false, 
                this.clickImg2 = false,
                this.hoverImg1 = false,
                this.hoverImg2 = false,
                this.mainImg = this.previewImg[3]
            },
            clickOutside(){
                this.clickImg1 = false,
                this.clickImg2 = false,
                this.clickImg3 = false,
                this.hoverImg1 = false,
                this.hoverImg2 = false,
                this.hoverImg3 = false,
                this.mainImg = this.previewImg[0]
            }
        }
    }
</script>

<style lang="sass">
    @import "~/assets/smart-grid.sass"

    .large-preview-city
        display: flex
        flex-direction: column
        align-items: center
        +size(10)
        margin-bottom: 40px
        +size-xs(12)

    .large-preview-city__title
        margin-top: 30px
        font-size: 24px
        border-bottom: 1px solid black
        text-align: center
        padding-left: 15px
        padding-right: 15px
        
    .large-preview-city__images
        display: flex
        width: 100%
        margin-top: 50px
    
    .large-preview-city__images-list
        +size(4)
        display: flex
        flex-direction: column

    .large-preview-city__image
        position: relative
        display: flex
        cursor: pointer
        overflow: hidden
        box-sizing: border-box
    
    .large-preview-city__image img
        width: 100%
        transition-duration: 3s
    
    .large-preview-city__image-mrb
        margin-bottom: 2%
    
    .large-preview-city__image-main
        display: flex
        margin-left: 0.5%
        width: 100%
        min-height: 100%
        max-height: 100%
    
    .large-preview-city__image-main img
        // width: 100%
        // height: 100%
    
    .large-preview-city__img-hover
        transform: scale(1.3)
    
    .large-preview-city__image-mask
        background: rgba(0,0,0, 0.5)
        position: absolute
        top: 0px
        left: 0px
        width: 100%
        height: 100%
        transition-duration: 3s

    .large-preview-city__image-mask-disabled
        background: rgba(0,0,0, 0.0)
    
    .large-preview-city__img-click
        border: 2px solid #ffd41e
    
    .large-preview-city__descr
        text-align: center
        margin-top: 30px
        +size(10)
    
    .large-preview-city__about
        width: 215px

</style>