import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/all.css'
import './assets/css/style.css'
import './assets/css/jquery.fancybox.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/jquery/jquery.min.js'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


