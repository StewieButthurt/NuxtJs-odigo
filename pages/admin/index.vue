<template>
    
</template>

<script>
    export default {
        layout: 'admin',
        async validate({ store, redirect, $axios }) {
            try {
                await $axios.$get(store.getters['routeMiddleware'])
                return true
            } catch(e) {
                redirect(store.getters['redirectMiddleware'])
            }
        },
        created() {
            this.$router.push('/admin/home/')
        }
    }
</script>

<style lang="sass">
    
</style>