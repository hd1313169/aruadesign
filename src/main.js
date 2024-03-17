// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/all.scss'
import App from './App.vue'
import router from './router'

import { defineRule, configure, Field, Form, ErrorMessage } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'

// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)

app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.use(configure)

app.use(createPinia())
app.use(router)

app.mount('#app')
