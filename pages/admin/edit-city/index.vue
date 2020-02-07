<template>
    <div class="edit-city">
            <app-edit-city
                v-for="item in cityes" 
                :title="item.title"
                :img="item.previewImg[0]"
                :id="item._id"
                :descr="item.descr"
                :key="item.title"
                :seeMoreButton="false"
            />
    </div>
</template>

<script>
    import AppEditCity from '~/components/edit-city/edit-city'

    export default {
        layout: 'admin',
        async validate({ store, redirect, $axios }) {
            try {
                await $axios.$get('/api/auth/admin/token')
                return true
            } catch(e) {
                redirect('/login?message=login')
            }
        },
        head: {
            title: 'Admin | Edit City'
        },
        components: {
            AppEditCity
        },
        data() {
            return {
                
            }
        },
        mounted() {
            this.$store.dispatch('city/setCity')
        },
        computed: {
            cityes() {
                return this.$store.getters['city/city']
            }
        }
    }
</script>

<style lang="sass">
    .edit-city
        display: flex
        flex-wrap: wrap
</style>