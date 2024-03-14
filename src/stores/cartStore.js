import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_URL, VITE_APP_PATH } = import.meta.env

export default defineStore('counter', {
  state: () => ({
    carts: [],
    final_total: 0,
    total: 0,
    // 表單
    form: {
      user: {
        name: '',
        email: '',
        tel: '',
        address: ''
      },
      message: ''
    }
  }),
  actions: {
    getCart () {
      axios
        .get(`${VITE_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data
          this.final_total = res.data.data.final_total
          this.total = res.data.data.total
        })
    },
    // 加入購物車
    addToCart (id, qty) {
      const order = {
        product_id: id,
        qty
      }

      axios
        .post(`${VITE_URL}/v2/api/${VITE_APP_PATH}/cart`, { data: order })
        .then((res) => {
          this.getCart()
        })
    },
    // 提交訂單
    onSubmit () {
      const order = this.form
      axios.post(`${VITE_URL}/v2/api/${VITE_APP_PATH}/order`, { data: order })
        .then(res => {
          // 提示訊息
          alert(`${res.data.message}`)

          // 清空表單
          this.form.user = {
            name: '',
            email: '',
            tel: '',
            address: ''
          }
          this.form.message = ''

          // 更新購物車
          this.getCart()

          // window.location = '/comfirm'
        })
    },

    getOrder () {
      console.log(this.form)
    }
  }
})
