<template>
    <div>
        <v-card
            width="300"
            class="edit-city__card-city"
        >
            <div class="today-top-city__img" @mouseover="todayTopCity = true" @mouseleave="todayTopCity = false">
                <div class="edit-city__img-card" :style="{ backgroundImage: `url(${imgMini})`, backgroundPosition: 'center', backgroundSize: 'cover' }" :class="{'today-top-city__img-hover' : todayTopCity}"></div>
                <div class="today-top-city__title-mask">
                    <div class="today-top-city__title-mask-text">
                        {{title}}
                    </div>
                </div>
            </div>
            
            <v-card-subtitle class="edit-city__card-subtitile">
                {{descrSmall}}
            </v-card-subtitle>

            <v-card-actions>
                <v-btn 
                        color="primary"
                        class="mr-8 mb-3"
                        min-width="90px"
                        @click="clickEdit()"
                        >
                        Edit
                </v-btn>
                <v-btn 
                    color="error"
                    class="mb-3"
                    min-width="90px"
                    @click.stop="dialog = true"
                    >
                    Delete
                </v-btn>
            </v-card-actions>
                    
            <v-dialog
                v-model="dialog"
                max-width="290"
            >
                <v-card class="pt-6">
                    <v-card-subtitle  class="edit-city__dialoge-subtitile">
                        Are you sure you want to remove {{title}} from the list of cities?
                    </v-card-subtitle>
    
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                        color="red darken-3"
                        text
                        :loading="deleteCityLoading"
                        @click="clickDelete()"
                        >
                        Delete
                        </v-btn>
                        <v-btn
                            color="grey darken-1"
                            text
                            @click="dialog = false"
                        >
                            Cancel
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                todayTopCity: false,
                dialog: false,
                deleteCityLoading: false
            }
        },
        props: [
            'title',
            'img',
            'id',
            'descr',
            'seeMoreButton'
        ],
        methods: {
            async clickEdit() {
                await this.$store.dispatch('localStorage/setTitle', this.title);
                await this.$store.dispatch('localStorage/setDescr', this.descr);
                await this.$store.dispatch('localStorage/setId', this.id);
                this.$router.push({ path: `/admin/edit-city/${this.title}`})
            },
            async clickDelete() {
                this.deleteCityLoading = true;
                await this.$store.dispatch('city/deleteCity', this.id);
                await this.$store.dispatch('city/setCity');
                this.deleteCityLoading = false;
                this.dialog = false;
            }
        },
        computed: {
            descrSmall() {
                if(this.descr.length > 120) {
                    let text = ''
                    for (let i = 0; i < 120; i++) {
                        text = text + this.descr[i]
                    }
                    return text + '...'
                } else {
                    return this.descr
                }
                
            },
            imgMini() {
                return this.img
            }
        }
    }
</script>

<style lang="sass">
    @import "~/assets/smart-grid.sass"
 
    .edit-city__card-city
        margin: 30px 30px 20px 30px

    .today-top-city__img
        width: 100%
        height: 300px
        cursor: pointer
        overflow: hidden
        display: flex
        position: relative
   
    
    .today-top-city__title-mask
        position: absolute
        display: flex
        justify-content: space-between
        align-content: center
        flex-wrap: wrap
        width: 100%
        height: 14%
        background: rgba(21, 24, 36, 0.6)
        bottom: 0px
        padding-left: 7%
        padding-right: 7%

    .today-top-city__title-mask-text
        font-size: 24px
        text-transform: uppercase
        color: white
        +lgX-block
            font-size: 18px
    
    .today-top-city__title-mask-counts
        display: flex
        align-content: center
        flex-wrap: wrap

    .today-top-city__title-mask-counts-like
        display: flex
        align-items: center
        margin-right: 18px
        color: white
        font-size: 18px
        +lgX-block 
            font-size: 16px
            margin-right: 14px
    
    .today-top-city__title-mask-counts-like svg
        width: 21px
        height: 20px
        margin-left: 7px
        +lgX-block
            width: 16px
            height: 15px
            margin-left: 6px
    
    .today-top-city__title-mask-counts-comments
        display: flex
        align-items: center
        color: white
        font-size: 18px
        +lgX-block
            font-size: 16px

    .today-top-city__title-mask-counts-comments svg
        width: 18px
        height: 18px
        margin-left: 12px
        +lgX-block
            width: 14px
            height: 14px
            margin-left: 9px
    
    .today-top-city__img-hover
        transform: scale(1.1)
    
    .edit-city__dialoge-subtitile
        font-size: 16px
    
    .edit-city__card-subtitile
        min-height: 120px
    
    .edit-city__img-card
        width: 100%
        padding-top: 100%
        transition-duration: 0.4s

</style>