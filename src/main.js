import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})
const pinia = createPinia()
const app = createApp(App).use(router).use(pinia).use(vuetify)
app.config.unwrapInjectedRef = true
app.mount('#app')
