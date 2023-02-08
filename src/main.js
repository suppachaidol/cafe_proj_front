import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios'
import VueAxios from 'vue-axios'




createApp(App).use(bootstrap).use(store).use(router).use(VueSweetalert2).use(VueAxios, axios).mount('#app')
