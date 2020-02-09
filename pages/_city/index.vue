<template>
    <div class="on-city">
        <app-large-preview-city
            v-for="item in city"
            :title="item.title"
            :descr="item.descr"
            :previewImg="item.previewImg"
            :key="item.title"
        >
        </app-large-preview-city>
    </div>
</template>

<script>
    import AppLargePreviewCity from '~/components/preview/large-preview-city'

    export default {
        layout: 'city-layouts',
        components: {
            AppLargePreviewCity
        },
        async validate({ store, route, redirect, $axios }) {
            let path = route.path
            path = path.slice(1)

            if(path.indexOf('?', 0) === -1) {
                let n = path.indexOf('/', 0)
                
                
                async function searchTitle(url) {
                    try {
                        let data = await $axios.$post('/api/city/search-on-city', {url})
                        if(data === null) {
                            return false
                        } else {
                            store.dispatch('city/searchCity', data)
                            return true
                        }
                    } catch(e) {
                        return false
                    }
                }

                async function checkLength(url) {
                    if(url.length > 20) {
                        return false
                    } else {
                        return await searchTitle(url)
                    }
                }


                if( n === -1) {
                    return checkLength(path)
                } else {
                    path = path.slice(0, n)
                    return checkLength(path)
                }
            } else {
                console.log('?')
                return false
            }
        },
        computed: {
            city() {
                return this.$store.getters['city/onCity']
            }
        }
    }
</script>

<style lang="sass" scoped>
    .on-city
        display: flex
        justify-content: center
</style>