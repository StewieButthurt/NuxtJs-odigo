<template>
    <div class="admin-add-city">
    <v-form>
      <v-container class="container-xs">
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field 
              append-icon="apartment"
              label="Enter the name of the city"
              v-model="titleEdit"
              v-on:keyup.enter="updateCity"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-textarea
                name="input-7-1"
                :auto-grow="true"
                :dense="true"
                append-icon="create"
                label="Add a description of the city"
                value=""
                v-model="descrEdit"
                v-on:keyup.enter="updateCity"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
            <v-col>
              <v-btn 
                      color="primary"
                      :loading="loadingSave"
                      class="login__button mr-8"
                      min-width="100px"
                      @click="updateCity()"
                      >
                      Save
              </v-btn>
              <v-btn 
                      class="login__button"
                      @click="clickBack()"
                      min-width="100px"
                      :disabled="loadingSave"
                      >
                      Back
              </v-btn>
            </v-col>
        </v-row>
        <v-spacer />
      </v-container>
    </v-form>
    </div>
</template>

<script>

    export default {
        layout: 'admin',
        async validate({ store, redirect, $axios }) {
            if(!store.getters['localStorage/title']) {
		        redirect('/admin/edit-city/')
            }
            
            if(!store.getters['localStorage/descr']) {
                redirect('/admin/edit-city/')
            }
            
            if(!store.getters['localStorage/id']) {
                redirect('/admin/edit-city/')
            }
            try {
                await $axios.$get('/api/auth/admin/token')
                return true
            } catch(e) {
                redirect('/login?message=login')
            }
        },
        head() {
            return {
                title: `Admin | Edit ${this.title}`
            }
        },
        components: {
        },
        mounted() {
            this.titleEdit = this.title,
            this.descrEdit = this.descr
        },
        data() {
            return {
                titleEdit: '',
                descrEdit: '',
                loadingSave: false
            }
        },
        methods: {
            clickBack() {
                this.$router.push('/admin/edit-city/')
            },
            async updateCity() {
                let data = {
                    title: this.titleEdit,
                    descr: this.descrEdit,
                    id: this.id
                }
                try{
                    this.loadingSave = true
                    await this.$store.dispatch('city/updateCity', data)
                    this.$router.push('/admin/edit-city/')
                    this.loadingSave = false
                } catch(e) {
                    this.loadingSave = false
                    throw e
                }
            }
        },
        computed: {
            title() {
                return this.$store.getters['localStorage/title']
            },
            descr() {
                return this.$store.getters['localStorage/descr']
            },
            id() {
                return this.$store.getters['localStorage/id']
            }
        }
    }
</script>

<style lang="sass">
  
    @import "~/assets/smart-grid.sass"

    .admin-file-pond-wrapper .v-input__prepend-outer
        display: none

    .login__button
        border-radius: 0px
        background-color: #1B7DFF
  
    .admin-add-city
        font-family: 'Lato-Regular', sans-serif
        font-weight: 500
    
</style>