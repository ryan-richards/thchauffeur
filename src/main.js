import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import { MotionPlugin } from '@vueuse/motion'
import naive from 'naive-ui'

const head = createHead()

createApp(App)
.use(router)
.use(naive)
.use(head)
.use(MotionPlugin)
.mount('#app')
