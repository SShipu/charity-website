import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// import './assets/js/main.js'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
import './assets/css/style.css' // your theme CSS
import './assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapVue3 from 'bootstrap-vue-3'



const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')
