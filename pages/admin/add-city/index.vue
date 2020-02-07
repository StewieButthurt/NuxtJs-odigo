<template>
    <div class="admin-add-city">
    <v-form>
      <v-container fluid class="">
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field 
              append-icon="apartment"
              label="Enter the name of the city"
              v-model="title"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-textarea
                name="input-7-1"
                :auto-grow="true"
                :dense="true"
                append-icon="create"
                label="Add a description of the city"
                value=""
                v-model="descr"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <div class="admin-file-pond-wrapper">
              <v-file-input 
                show-size 
                :rules="rules"
                label="The main picture (aspect ratio 1:1)"
                accept="image/png, image/jpeg"
                append-icon="attachment"
                v-model="file[0]"
                @click:clear="file[0] = null, previewImg[0] = null"
                @change="updateImg(0)"
              >

            </v-file-input>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <div class="admin-file-pond-wrapper">
              <v-file-input 
                show-size 
                :rules="rules"
                label="Miniature  picture (aspect ratio 1:1)"
                accept="image/png, image/jpeg"
                append-icon="attachment"
                v-model="file[1]"
                @click:clear="file[1] = null, previewImg[1] = null"
                @change="updateImg(1)"
              >

            </v-file-input>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <div class="admin-file-pond-wrapper">
              <v-file-input 
                show-size 
                :rules="rules"
                label="Miniature  picture (aspect ratio 1:1)"
                accept="image/png, image/jpeg"
                append-icon="attachment"
                v-model="file[2]"
                @click:clear="file[2] = null, previewImg[2] = null"
                @change="updateImg(2)"
              >

            </v-file-input>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <div class="admin-file-pond-wrapper">
              <v-file-input 
                show-size 
                :rules="rules"
                label="Miniature  picture (aspect ratio 1:1)"
                accept="image/png, image/jpeg"
                append-icon="attachment"
                v-model="file[3]"
                @click:clear="file[3] = null, previewImg[3] = null"
                @change="updateImg(3)"
              >

            </v-file-input>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-spacer />
              <v-btn 
                      :loading="buttonLoading" 
                      color="primary" 
                      class="login__button"
                      :disabled="buttonDisabled"
                      @click="mainImg()"
                      >
                      Preview
              </v-btn>
          </v-col>
        </v-row>
        <v-spacer />
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <app-preview 
              v-if="appPreviewStatus && Boolean(previewImg[0]) && Boolean(previewImg[1]) && Boolean(previewImg[2]) && Boolean(previewImg[3])"
              :title="title"
              :descr="descr"
              :previewImg="previewImg"
              :file="file"
              :seeMoreButton="seeMoreButton"
              @previewChange="previewChange"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    </div>
</template>

<script>
    const AppPreview = () => { return import('~/components/preview/preview.vue') }
    
    export default {
        layout: 'admin',
        head: {
            title: 'Admin | Add City'
        },
        async validate({ store, redirect, $axios }) {
            try {
                await $axios.$get('/api/auth/admin/token')
                return true
            } catch(e) {
                redirect('/login?message=login')
            }
        },
        components: {
            AppPreview
        },
        data() {
            return {
                title: '',
                file: [],
                previewImg: [],
                buttonLoading: false,
                appPreviewStatus: false,
                descr: '',
                rules: [
                  value => !value || value.size < 10000000 || 'Image size should be less than 10 MB!',
                ],
            }
        },
        methods: {
           async mainImg() {

             if(this.title !== '' && 
                this.descr !== '' && 
                this.file.length === 4 &&
                Boolean(this.previewImg[0]) === true &&
                Boolean(this.previewImg[1]) === true &&
                Boolean(this.previewImg[2]) === true &&
                Boolean(this.previewImg[3]) === true
                ) {
                  this.appPreviewStatus = true;
             }
          },
          previewChange() {
            this.appPreviewStatus = false;
          },
          async updateImg(index) {
            console.log(this.file[index])
            if(await this.file[index] !== null) {
              var readerPreview = new FileReader();
              var vm = this;


              readerPreview.onload = async function(e) {
                  vm.previewImg.splice(index, 1, e.target.result)
              }

              await readerPreview.readAsDataURL(this.file[index]);
            }
          }
        },
        computed: {
          buttonDisabled() {
            if(this.title !== '' && 
               this.descr !== '' && 
               this.file.length === 4 && 
               Boolean(this.previewImg[0]) === true &&
               Boolean(this.previewImg[1]) === true &&
               Boolean(this.previewImg[2]) === true &&
               Boolean(this.previewImg[3]) === true
              ) {
                return false
              } else {
                return true
              }
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