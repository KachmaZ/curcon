import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// I18n
import { createI18n } from 'vue-i18n'
import { messages } from './i18n'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    messages: {
        ...messages
    }
})

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(i18n).use(vuetify).mount('#app')
