// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/css/common.styl'
import 'swiper/dist/css/swiper.min.css'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(from)
  console.log(to)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
