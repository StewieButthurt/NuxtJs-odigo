<template>
    <div class="video" id="Videos">
        <div class="video__padding-bottom">
            <div class="video__position">
                <client-only>
                    <youtube class="youtube-video" :class="{'preview-active' : previewLoading === false}" video-id="Et7O5-CzJZg"  ref="youtube" @playing="playing"></youtube>
                    <div class="video__preview-img" :class="{'preview-disabled' : previewYoutube === false}">
                        <div class="preview__button" 
	     		     		@click="changePreview()" 
	     		     		>
	     					<svg viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 56C0 25.088 25.088 0 56 0C86.912 0 112 25.088 112 56C112 86.912 86.912 112 56 112C25.088 112 0 86.912 0 56ZM78.4 56L44.8 30.8V81.2L78.4 56Z" fill="white"/>
                            </svg>
	     		     	</div>
                    </div>
                    <div class="preview-loading" :class="{'preview-active' : previewLoading}">
                        <img  src="~/assets/loading.gif" alt="loading.gif">
                    </div>
                </client-only>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                previewYoutube: true,
                previewLoading: false
            }
        },
        methods: {
            playing() {
                this.previewLoading = false
            },
            playVideo() {
		        this.$refs.youtube.player.playVideo()
            },
            changePreview() {
                this.previewLoading = true;
                this.previewYoutube = false;
			    this.playVideo()
		    }
        }
    }
</script>

<style lang="sass">

    .video
        width: 100%
        user-select: none
    
    .video__padding-bottom
        padding-bottom: 41.5%
        width: 100%
        position: relative
        +md-block
            padding-bottom: 60%
        +xs-block
            padding-bottom: 68%
    
    .video__position
        position: absolute
        width: 100%
        height: 100%
    
    .youtube-video
        width: 100%
        height: 100%
    
    .video__preview-img
        position: absolute
        top: 0px
        left: 0px
        width: 100%
        height: 100%
        display: flex
        justify-content: center
        -webkit-box-align: center
        -ms-flex-align: center
        align-items: center
        align-content: center
        flex-wrap: wrap
        background: url('../assets/street.jpg')
        background-size: cover
        z-index: 1
        display: -webkit-box
        display: -ms-flexbox
        -webkit-box-pack: center
        -ms-flex-pack: center
        -ms-flex-line-pack: center
        -ms-flex-wrap: wrap
       

    .preview-disabled
        z-index: -1
    
    .preview__button
        width: 14%
        height: 20%
        cursor: pointer
        transition: 0.3s
    
    .preview__button svg
        width: 100%
        height: 100%
    
    .preview__button:active
        transform: scale(0.8)
    
    .preview-loading
        position: absolute
        width: 100%
        height: 100%
        left: 0px
        top: 0px
        background: RGB(0,0,0)
        display: flex
        justify-content: center
        align-content: center
        flex-wrap: wrap
        z-index: -1
    
    .preview-loading img
        width: 5%
        height: 12%
        +md-block
            width: 5%
            height: 8%
    
    .preview-active
        z-index: 1
</style>