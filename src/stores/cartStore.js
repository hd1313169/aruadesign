import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_URL, VITE_APP_PATH } = import.meta.env

export default defineStore('counter', {
  state: () => ({
    carts: [],
    final_total: 0,
    total: 0
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
          alert('已加入購物車')
          this.getCart()
        })
    }
  }
})
