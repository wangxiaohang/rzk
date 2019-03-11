// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/css/common.styl'
import 'swiper/dist/css/swiper.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Bmob from 'hydrogen-js-sdk'

// Bmob.initialize('bd871ea12dc290abce3d439aa8cd12aa', '5c7a9c2c9b82387a615d8a674e1ebc78')

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
