<template>
  <div class="pb-160 pb-md-120"></div>

  <div class="container">
    <!-- 標題 -->
    <div class="d-flex justify-content-between align-items-end mb-8 mt-40">
      <h2 class="text-primary">訂單確認</h2>
    </div>
    <!-- 購物車列表 -->
    <table class="table align-middle">
      <!-- 表頭 -->
      <thead>
        <tr>
          <th class="text-primary">品名</th>
          <th class="text-primary">數量</th>
          <th class="text-primary">小計</th>
        </tr>
      </thead>
      <!-- 表頭 -->
      <tbody>
        <!-- 列表 -->
        <tr v-for="item in order.products" :key="item.id">
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
              </div>
            </div>
          </td>

          <td width="80">
            {{ item.qty }}
          </td>
          <td>
            <p class="text-end">${{ item.total }}</p>
          </td>
          <!-- 資訊 -->
        </tr>
        <!-- 列表 -->
      </tbody>
    </table>
    <!-- 購物車列表 -->

    <!-- 計算 -->
    <div class="row justify-content-end align-items-center mb-48 mb-md-80">
      <div class="col-6 col-lg-3 col-md-6">
        <!-- 總計 -->
        <div
          class="d-flex justify-content-between align-items-center py-16 py-md-24"
        >
          <p class="me-16 text-primary">總計</p>
          <p class="fs-20 fw-bold text-end">${{ order.total }}</p>
        </div>
        <!-- 總計 -->
      </div>
    </div>
    <!-- 計算 -->

    <!-- 訂購人資料 -->
    <div class="mb-80">
      <h2 class="text-primary text-center mb-40">訂購資訊確認</h2>
      <div class="row text-primary">
        <div class="col-12 col-md-6 offset-md-3 mb-40">
          <table class="w-100">
            <tr class="border-top border-bottom" height="80px">
              <td class="fw-bold">姓名</td>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr class="border-top border-bottom" height="80px">
              <td class="fw-bold">信箱</td>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr class="border-top border-bottom" height="80px">
              <td class="fw-bold">電話</td>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr class="border-top border-bottom" height="80px">
              <td class="fw-bold">地址</td>
              <td>{{ order.user.address }}</td>
            </tr>
          </table>
        </div>

        <div class="col-12 col-md-4 offset-md-4" >
          <button type="button" @click.prevent="payOrder" class="w-100 btn btn-primary rounded-0">確認結帳</button>
        </div>
      </div>
    </div>
    <!-- 訂購人資料 -->
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      orderId: '',
      order: {}
    }
  },
  methods: {
    getOrder () {
      axios
        .get(`${VITE_URL}/v2/api/${VITE_APP_PATH}/order/${this.orderId}`)
        .then((res) => {
          this.order = res.data.order
        })
    },
    payOrder () {
      axios
        .post(`${VITE_URL}/v2/api/${VITE_APP_PATH}/pay/${this.orderId}`)
        .then(() => {
          this.getOrder()
          console.log('ok')
          this.$router.push('/thankspage')
        }).catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId // 從路由取得訂單 id
    this.getOrder()
  }
}
</script>
