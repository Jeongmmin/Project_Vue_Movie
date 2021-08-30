import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
.use(router)
.use(store)
.use(loadImage)
.mount('#app')
