import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App)
.use(router)
.use(store)
.use(DatePicker)
.mount('#app')
