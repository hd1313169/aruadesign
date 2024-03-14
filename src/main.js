// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/all.scss'
import App from './App.vue'
import router from './router'

import { defineRule, configure, Field, Form, ErrorMessage } from 'vee-validate'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

defineRule('required', (value) => {
  if (!value || !value.length) {
    return '此欄位為必填'
  }
  return true
})
defineRule('email', (value) => {
  if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}/i.test(value)) {
    return '請輸入有效的電子郵件地址'
  }
  return true
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
