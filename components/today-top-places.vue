<template>
    <div class="today-top-places" id="Locations">
        <div class="get-inspired__header">
            <h2>
                <span class="get-inspired__header-border">Popular places</span>
                 to visit
            </h2>
        </div>
        <div class="today-top-places__cityes">
            <app-small-preview-city 
                v-for="item in cityes"
                :key="item.title"
                :title="item.title"
                :img="item.previewImg[0]"
                :descr="item.descr"
                :seeMoreButton="true"
            />
        </div>
    </div>
</template>

<script>

    import AppSmallPreviewCity from '~/components/preview/small-preview-city'

    export default {
        data() {
            return {

            }
        },
        components: {
            AppSmallPreviewCity
        },
        computed: {
            cityes() {
                return this.$store.getters['city/city']
            }
        }     
    }
</script>

<style lang="sass">

    .today-top-places
        width: 100%
        +size(10.5)
        display: flex
        flex-direction: column
        align-items: center
        margin: 0 auto
        margin-top: 185px
        +lgX-block
            margin-top: 139px
        +xs-block
            width: 100%
    
    .today-top-places__cityes
        width: 100%
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        padding-top: 42px
        padding-bottom: 77px
        +lgX-block
            padding-top: 32px
            padding-bottom: 29px
    
    .today-top-places__button-loader
        width: 100%
        display: flex
        justify-content: center
</style>