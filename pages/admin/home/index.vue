<template>
    <div class="admin-home">
        <div class="admin-home__tile">
            Welcome to Admin Panel!
        </div>
    </div>
</template>

<script>
    export default {
        async validate({ store, redirect, $axios }) {
            try {
                await $axios.$get(store.getters['routeMiddleware'])
                return true
            } catch(e) {
                redirect(store.getters['redirectMiddleware'])
            }
        },
        layout: 'admin',
        head: {
            title: 'Admin | Home'
        }
    }
</script>

<style lang="sass">
    .admin-home
        padding-left: 20px
    .admin-home__tile
        padding-top: 20px
        font-size: 24px
</style>