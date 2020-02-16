<template>
    <div class="admin-preview">
        <div class="admin-preview__text">
            The thumbnail on the main
        </div>
        <app-small-preview-city 
            :title="title"
            :img="previewImg[0]"
            :descr="descr"
            :seeMoreButton="false"
        />
        <div class="admin-preview__text">
            Detailed description of the place
        </div>
        <app-large-preview-city 
            :title="title"
            :descr="descr"
            :previewImg="previewImg"
        />
        <v-row>
            <v-col col="12">
                <v-btn 
                    color="primary" 
                    class="login__button"
                    :loading="loading"
                    @click="createCity()"
                    >
                    add to site
                </v-btn>
            </v-col>
            <v-col>
                <v-btn 
                    color="normal" 
                    class="login__button"
                    :disabled="buttonClosePreview"
                    @click="$emit('previewChange')"
                    >
                    close preview
                 </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import AppSmallPreviewCity from '~/components/preview/small-preview-city'
    import AppLargePreviewCity from '~/components/preview/large-preview-city'

    export default {
        props: [
            'title',
            'descr',
            'previewImg',
            'file'
        ],
        data() {
            return {
                loading: false
            }
        },
        components: {
            AppSmallPreviewCity,
            AppLargePreviewCity
        },
        computed: {
            buttonClosePreview() {
                return this.loading
            }
        },
        methods: {
            async createCity() {
                let data = {
                    title: this.title,
                    descr: this.descr,
                    previewImg: this.previewImg,
                    file: this.file
                }
                this.loading = true
                try {
                    await this.$store.dispatch('city/createCity', data)
                    this.loading = false
                    this.$router.push('/admin/edit-city/')
                } catch(e) {
                    this.loading = false
                }
            }
        }
    }
</script>

<style lang="sass">

    .admin-preview
        width: 100%
        min-height: 100vh
        background-color: white
        position: absolute
        top: 0px
        left: 0px
        display: flex
        flex-direction: column
        align-items: center
        padding-bottom: 100px

    
    .admin-preview__text
        margin-top: 40px
        font-size: 36px
        +lg-block
            font-size: 24px

</style>