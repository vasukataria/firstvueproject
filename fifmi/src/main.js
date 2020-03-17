import Vue from 'vue';
import App from './App.vue';
import './assets/css/bootstrap.min.css';
import './assets/css/green-audio-player.css';
import './assets/css/icofont.css';
import './assets/css/jquery.calendar.css';
import './assets/css/swiper.min.css';
import './assets/css/main.css';
//import './assets/js/jquery.min.js';
import 'jquery';
//import './assets/js/bootstrap.min.js';
import 'bootstrap';
import './assets/js/green-audio-player.js';
import './assets/js/popper.min.js';
import './assets/js/swiper.min.js';




Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app') 

