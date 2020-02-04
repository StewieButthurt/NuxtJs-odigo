<template>
    
</template>

<script>
    export default {
        layout: 'admin',
        middleware: ['admin-auth'],
        created() {
            this.$router.push('/admin/home/')
        }
    }
</script>

<style lang="sass">
    
</style>