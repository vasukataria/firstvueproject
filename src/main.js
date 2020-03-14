import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/all.css'
import './assets/css/style.css'
import './assets/css/jquery.fancybox.min.css'
import './assets/css/owl.carousel.min.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

module.exports = {
  "rules": {
    "no-mixed-spaces-and-tabs": 0, // disable rule
  }
}