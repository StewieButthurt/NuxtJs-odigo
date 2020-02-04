<template>
        <div class="admin">
            <v-app id="inspire">
                <v-navigation-drawer
                v-model="drawer"
                app
                >
                <v-list dense>
                    <v-list-item nuxt to="/admin/home/">
                    <v-list-item-action>
                        <v-icon>home</v-icon>
                    </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                    Home
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item nuxt to="/admin/analytics/">
                    <v-list-item-action>
                        <v-icon>assessment</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Analytics </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <v-list-item nuxt to="/admin/edit-city/">
                    <v-list-item-action>
                        <v-icon>edit</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Edit city </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <v-list-item nuxt to="/admin/add-city">
                    <v-list-item-action>
                        <v-icon>add</v-icon>
                    </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                    Add city
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item nuxt to="/admin/create-user">
                    <v-list-item-action>
                        <v-icon>supervisor_account</v-icon>
                    </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                    Create user
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="logOut()">
                    <v-list-item-action>
                        <v-icon>input</v-icon>
                    </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                    Log Out
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                </v-navigation-drawer>

                <v-app-bar
                app
                color="#0E1D28"
                dark
                >
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>Admin Panel</v-toolbar-title>
                </v-app-bar>

                <v-content>
                <v-container
                    fluid
                    fill-height
                >
                    <v-layout
                    align-start
                    justify-center
                    >
                    <v-flex text-xs-center>
                        <nuxt />
                    </v-flex>
                    </v-layout>
                </v-container>
                </v-content>
                <v-footer
                color="#0E1D28"
                app
                >
                <span class="white--text">&copy; Developed by StewieButthurt 2020</span>
                </v-footer>
            </v-app>
        </div>
</template>

<script>
    export default {
        head: {
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
            ]
        },
        data() {
            return {
                drawer: null
            }
        },
        methods: {
            async logOut() {
                await this.$router.push('/')
				this.$store.dispatch('auth/logout')
            }
        }
    }
</script>

<style lang="sass">
    @import "~/assets/smart-grid.sass"
    
    .page-enter-active, .page-leave-active
        transition: opacity .4s
    
    .page-enter, .page-leave-active
        opacity: 0
</style>