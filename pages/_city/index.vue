<template>
    <v-app id="on-city-buttons">
        <div class="on-city">
            <app-large-preview-city
                v-for="item in city"
                :title="item.title"
                :descr="item.descr"
                :previewImg="item.previewImg"
                :key="item.title"
            >
            </app-large-preview-city>
            <div class="on-city__form-wrapper" :style="getBackground">
                <div class="on-city__form-container">
                    <div class="on-city__form-container-input">
                        <div class="on-city__form-title">
                            Reservation your tour now
                        </div>
                        <div class="on-city__form-input">
                            <v-icon class="mr-3 pb-3">person</v-icon>
                            <v-text-field @cnange="validateName" :error-messages="nameErrorMassage"  :error="validateNameError" type="text" label="Name" v-model="name" hide-details="auto" ></v-text-field>
                        </div>
                        <div class="on-city__form-input">
                            <v-icon class="mr-3 pb-3">mail</v-icon>
                            <v-text-field @cnange="validateEmail"  :error-messages="emailErrorMassage" :error="validateEmailError" type="text" label="Email" v-model="email" hide-details="auto" ></v-text-field>
                        </div>
                        <div class="on-city__form-input">
                            <v-icon class="mr-3 pb-3">smartphone</v-icon>
                            <v-text-field @cnange="validatePhone"  :error="validatePhoneError" :error-messages="phoneErrorMassage" type="text" label="Phone" v-model="phone" hide-details="auto" ></v-text-field>
                        </div>
                    </div>
                    <div class="on-city__form-buttons mt-5">
                            <v-btn @click="onOrder()" :loading="buttonLoading" :disabled="buttonDisabled" class="mr-2" color="primary" small>Book Now</v-btn>
                            <v-btn :disabled="buttonLoading" nuxt to="/" small>Back to main</v-btn>
                    </div>
                    <div key="recaptcha" class="form__recaptcha">
                            <recaptcha
                                @error="onError"
                                @success="register"
                                @expired="onExpired"
                            />
                    </div>
                </div>
                <span class="on-city__form-wrapper-mask">
                </span>
            </div>
            <v-dialog
                v-model="checkStatusServerError"
                max-width="370"
            >
                <v-card>
                    <v-card-title class="headline">Your application is accepted!</v-card-title>
                    <v-card-text >
                        Our manager will contact you shortly
                    </v-card-text>
        
                    <v-card-actions>
                        <v-spacer></v-spacer>
            
                        <v-btn
                        color="primary"
                        small
                        text
                        :loading="loadingButtonDialog"
                        @click="clickButtonDialogs()"
                        >
                        Ok.
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </v-app>
</template>

<script>
    import AppLargePreviewCity from '~/components/preview/large-preview-city'
    import isEmail from 'validator/lib/isEmail'
    import isMobilePhone from 'validator/lib/isMobilePhone'
    import isAlpha from 'validator/lib/isAlpha'

    export default {
        layout: 'city-layouts',
        components: {
            AppLargePreviewCity
        },
        head() {
            return {
                title: `Odigo | ${this.city[0].title}`,
                link: [
                    {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
                ]
            }
        },
        data() {
            return {
                email: '',
                emailStatus: null,
                emailErrorMassage: null,
                phone: '',
                phoneStatus: null,
                phoneErrorMassage: null,
                name: '',
                nameStatus: null,
                nameErrorMassage: null,
                captchaStatus: null,
                recaptchaToken: null,
                buttonLoading: false,
                statusServerError: null,
                loadingButtonDialog: false
            }
        },
        methods: {
            onError (error) {
			      console.log('Error happened:', error)
            },
            onExpired() {
                  console.log('onExpired')
			      this.captchaStatus = false
            },
            register(recaptchaToken) {
                this.recaptchaToken = recaptchaToken
                this.captchaStatus = true
            },
            async onOrder() {
                if(this.validateEmail === 'validate' && this.validatePhone === 'validate' && this.validateName === 'validate') {
                    if(this.captchaStatus = true) {
                        let data = {
                            name: this.name,
                            email: this.email,
                            phone: this.phone,
                            title: this.city[0].title,
                            recaptchaToken: this.recaptchaToken,
                        }
                        
                        this.buttonLoading = true

                        try {
                            await this.$axios.post('/api/form', data)
                                .then((response) => {
                                    if(response.data.message === "Name error") {
                                        this.nameErrorMassage = 'The name must contain latin letters and be longer than 3 characters'
                                        this.captchaStatus = false
                                    } 
                                    
                                    if(response.data.message === "Email error") {
                                        this.emailErrorMassage = "Enter mail in the format 'example@example.com'"
                                        this.captchaStatus = false
                                    } 
                                    
                                    if(response.data.message === "Phone error") {
                                        this.phoneErrorMassage = 'The number must be at least 6 digits and consist of digits'
                                        this.captchaStatus = false
                                    } 
                                    
                                    if(response.data.message === "recaptcha and form ok"){
                                        this.emailStatus = null
                                        this.nameStatus = null
                                        this.phoneStatus = null
                                        this.statusServerError = true
                                        
                                    }

                                })
                            this.buttonLoading = false
                        } catch(e) {
                            console.log(e)
                            this.buttonLoading = false
                        }
                    }
                }  
            },
            clickButtonDialogs() {
                this.loadingButtonDialog = true
                this.$router.push('/')
            }
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
            },
            getBackground() {
                return 'background-image: url(' + this.city[0].previewImg[2] + '); background-color: rgba(218,205,205, 0.5); background-size: cover;  background-position: center center';
            },
            buttonDisabled() {
                if(this.captchaStatus  === true && this.validateEmail === 'validate' && this.validatePhone === 'validate' && this.validateName === 'validate') {
                    return false
                } else {
                    return true
                }
            },
            validateEmail() {
                if(isEmail(this.email)) {
                    return  'validate'
                } else if(this.email === ''){
                    return 'noChange'
                } else {
                    return 'noValidate'
                }
            },
            validateEmailError() {
                if(this.validateEmail === 'validate') {
                    this.emailErrorMassage = null
                    return false
                } else if(this.validateEmail === 'noChange') {
                    this.emailErrorMassage = null
                    return false
                } else {
                    this.emailErrorMassage = "Enter mail in the format 'example@example.com'"
                    return true
                }
            },
            validatePhone() {
                if(isMobilePhone(this.phone)) {
                    this.phoneErrorMassage = null
                    return  'validate'
                } else if(this.phone === ''){
                    this.phoneErrorMassage = null
                    return 'noChange'
                } else {
                    this.phoneErrorMassage = 'The number must be at least 6 digits and consist of digits'
                    return 'noValidate'
                }
            },
            validatePhoneError() {
                if(this.validatePhone === 'validate') {
                    return false
                } else if(this.validatePhone === 'noChange') {
                    return false
                } else {
                    return true
                }
            },
            validateName() {
                if(isAlpha(this.name) && this.name.length > 3) {
                     this.nameErrorMassage = null
                    return  'validate'
                } else if(this.name === ''){
                    this.nameErrorMassage = null
                    return 'noChange'
                } else {
                    this.nameErrorMassage = 'The name must contain latin letters and be longer than 3 characters'
                    return 'noValidate'
                }
            },
            validateNameError() {
                if(this.validateName === 'validate') {
                    return false
                } else if(this.validateName === 'noChange') {
                    return false
                } else {
                    return true
                }
            },
            checkStatusServerError() {
                if(this.statusServerError === true) {
                    return true
                } else if(this.statusServerError === null){
                    return false
                } else {
                    return false
                }
            }
        }
    }
</script>

<style lang="sass" scoped>

    @import "~/assets/smart-grid.sass"

    .on-city
        display: flex
        flex-direction: column
        align-items: center
    
    .on-city__form-wrapper
        width: 100%
        margin-top: 30px
        display: flex
        justify-content: center
        position: relative

    .on-city__form-container
        +size(6)
        background-color: rgba(218,205,205, 0.8)
        display: flex
        flex-direction: column
        align-items: center
        margin-top: 100px
        margin-bottom: 100px
        overflow: hidden
        z-index: 2
        +size-lg(6)
        +size-md(10)
        +size-xs(11)
    
    .on-city__form-title
        display: flex
        font-size: 24px
        font-weight: bold
        margin-top: 40px
        color: black
        margin-bottom: 10px
        +lg-block
            font-size: 20px

    .on-city__form-wrapper-mask
        position: absolute
        left: 0px
        top: 0px
        width: 100%
        height: 100%
        background-color: rgba(218,205,205, 0.1)
        z-index: 1
    
    .on-city__form-container-input
        display: flex
        flex-direction: column
        align-items: center
        min-width: 288px
        min-height: 266px

    .on-city__form-input
        margin: 0 auto
        width: 100%
        width: 320px
        min-height: 84px
        display: flex
        align-content: center
        +xs-block
            width: 250px
    
    .form__recaptcha
        margin: 0 auto
        margin-top: 30px
        margin-bottom: 30px
    
    
    
</style>