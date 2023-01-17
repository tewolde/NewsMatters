import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './lib/store'
import router from './lib/router'

import { createPinia, setActivePinia } from 'pinia'
import { createWebHistory } from 'vue-router'

const app = createApp(App)
app.use(store).use(router).mount('#app')
