<template>
  <div class="pb-160 pb-md-120"></div>
  <div class="container">
    <!-- 標題 -->
    <h2 class="text-primary mb-8">購物車</h2>

    <!-- 購物車列表 -->
    <table class="table align-middle">
      <!-- 表頭 -->
      <thead>
        <tr>
          <th class="text-primary">品名</th>
          <th class="text-primary">數量</th>
          <th class="text-primary">小計</th>
          <th class="text-primary">刪除</th>
        </tr>
      </thead>
      <!-- 表頭 -->
      <tbody v-if="carts.total === 0" class="border-bottom">
        <tr>
          <td>
            <p class="py-40 text-secondary">購物車還是空著的</p>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <!-- 列表 -->
        <tr v-for="item in carts.carts" :key="item.id">
          <!-- 資訊 -->
          <td class="py-40 text-primary">
            <div class="d-flex align-items-center">
              <img
                :src="item.product.imageUrl"
                alt="圖片"
                class="me-16 d-none d-md-block"
                style="width: 10%"
              />
              <div class="position-relative">
                <p class="fw-bold">{{ item.product.title }}</p>
                <p>${{ item.product.price }}</p>
                <routerLink
                  :to="`product/${item.product.id}`"
                  class="stretched-link"
                ></routerLink>
              </div>
            </div>
          </td>

          <td>
            <input
              v-model="item.qty"
              @change="adjustQty(item, item.qty)"
              min="1"
              type="number"
              class="form-control text-center w-75"
            />
          </td>
          <td>
            <p class="text-end">${{ item.total }}</p>
          </td>
          <td>
            <button
              @click="removeCartItem(item)"
              type="button"
              class="btn ms-auto d-block"
            >
              <span
                class="material-symbols-outlined text-gray text-end align-middle"
              >
                close
              </span>
            </button>
          </td>
          <!-- 資訊 -->
        </tr>
        <!-- 列表 -->
      </tbody>
    </table>
    <!-- 購物車列表 -->

    <!-- 計算 -->
    <div class="row justify-content-between align-items-center mb-48 mb-md-80">
      <div class="col-6">
        <button
          @click="removeAllItem()"
          class="bg-white border-0 text-gray hover-danger d-flex.align-items-center"
          type="button"
        >
          <span class="material-symbols-outlined align-middle me-4">
            delete </span
          >清空購物車
        </button>
      </div>
      <div class="col-6 col-lg-3 col-md-6">
        <!-- 總計 -->
        <div
          class="d-flex justify-content-between align-items-center py-16 py-md-24"
        >
          <p class="me-16 text-primary">總計</p>
          <p class="fs-20 fw-bold text-end">${{ carts.total }}</p>
        </div>
        <!-- 總計 -->
      </div>
    </div>
    <!-- 計算 -->

    <!-- 訂購人資料 -->
    <div class="mb-80">
      <h2 class="text-primary">訂購人資料</h2>
      <v-form ref="form" v-slot="{ errors }" @submit="createOrder">
        <div class="row text-primary">
          <!-- 信箱 -->
          <div class="col-12 col-md-6 mb-24">
            <label for="email" class="form-label mb-2">Email</label>
            <v-field
              id="email"
              name="email"
              type="email"
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></v-field>
            <error-message
              name="email"
              class="invalid-feedback"
            ></error-message>
          </div>

          <!-- 姓名 -->
          <div class="col-12 col-md-6 mb-24">
            <label for="name" class="form-label mb-2">收件人姓名</label>
            <v-field
              id="name"
              name="姓名"
              type="text"
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <!-- 電話 -->
          <div class="col-12 col-md-6 mb-24">
            <label for="tel" class="form-label mb-2">收件人電話</label>
            <v-field
              id="tel"
              name="電話"
              type="text"
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required"
              v-model="form.user.tel"
            ></v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <!-- 收件人地址 -->
          <div class="col-12 col-md-6 mb-24">
            <label for="address" class="form-label mb-2">收件人地址</label>
            <v-field
              id="address"
              name="地址"
              type="text"
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入收件人地址"
              rules="required"
              v-model="form.user.address"
            ></v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="col-12 mb-40">
            <label class="form-label mb-2">備註</label>
            <textarea class="w-100 form-control rounded-0" rows="4"></textarea>
          </div>

          <div class="col-12 col-md-4 offset-md-4">
            <button
              type="submit"
              :class="{ disabled: carts.total === 0 }"
              class="w-100 btn btn-primary rounded-0"
            >
              確認訂單
            </button>
          </div>
        </div>
      </v-form>
    </div>
    <!-- 訂購人資料 -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore'
import axios from 'axios'

const { VITE_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
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
    }
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),

    // 調整購物車數量
    adjustQty (item, qty = 1) {
      // put 的 order 參數
      const order = {
        product_id: item.product_id,
        qty
      }

      axios
        .put(`${VITE_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, {
          data: order
        })
        .then((res) => {
          // 更新購物車
          this.getCart()
        })
    },
    // 刪除個別購物車品項
    removeCartItem (item) {
      axios
        .delete(`${VITE_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((res) => {
          // 提示訊息
          alert(`${item.title}已刪除`)
          // 更新購物車
          this.getCart()
        })
    },
    // 刪除全部購物車
    removeAllItem () {
      axios.delete(`${VITE_URL}/v2/api/${VITE_APP_PATH}/carts`).then((res) => {
        // 提示訊息
        alert('購物車已清空')

        // 更新購物車
        this.getCart()
      })
    },

    // 提交訂單
    createOrder (id) {
      const order = this.form
      axios.post(`${VITE_URL}/v2/api/${VITE_APP_PATH}/order`, { data: order })
        .then((res) => {
          console.log(res.data.orderId)
          // this.$router.push(`/user/checkout/${res.data.orderId}`)
          this.$router.push(`/comfirm/${res.data.orderId}`)
          this.$refs.form.resetForm()
        })
    }
  },
  mounted () {
  }
}
</script>
