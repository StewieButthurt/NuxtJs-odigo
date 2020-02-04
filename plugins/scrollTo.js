import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import vClickOutside from 'v-click-outside'


Vue.use(VueScrollTo, {
    container: "body",
    duration: 2000,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
Vue.use(vClickOutside)