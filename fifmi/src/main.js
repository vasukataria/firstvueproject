import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/bootstrap.min.css';
import './assets/css/green-audio-player.css';
import './assets/css/icofont.css';
import './assets/css/jquery.calendar.css';
import './assets/css/swiper.min.css';
import './assets/css/main.css';
import './assets/js/jquery.min.js';
//import './assets/js/lightgallery-all.min.js';
import 'bootstrap';
import './assets/js/green-audio-player.js';
import './assets/js/isotope.pkgd.min.js';
//import './assets/js/jquery.calendar.js';
import './assets/js/popper.min.js';
import './assets/js/swiper.min.js';




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
