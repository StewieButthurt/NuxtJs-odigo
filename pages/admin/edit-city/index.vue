<template>
    <div class="edit-city">
        <v-row>
            <v-col>
                <app-edit-city
                    v-for="item in cityes" 
                    :title="item.title"
                    :img="item.previewImg[0]"
                    :id="item._id"
                    :descr="item.descr"
                    :key="item.title"
                    :seeMoreButton="false"
                />
            </v-col>
        </v-row>
        
    </div>
</template>

<script>
    import AppEditCity from '~/components/edit-city/edit-city'

    export default {
        layout: 'admin',
        middleware: ['admin-auth'],
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

<style style="sass">

</style>