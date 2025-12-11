import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)   // ← 이게 없으면 RouterLink 사용 불가
  .mount('#app')
