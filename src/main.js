import Vue from 'vue'
import App from './App'
import axios from 'axios'
window.axios = axios

axios.defaults.baseURL = 'https://boxteam-c2c70.firebaseio.com/'
Vue.config.productionTip = false

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})