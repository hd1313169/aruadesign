<template>
  <div class="pb-160 pb-md-120"></div>
  <div class="container">
    <div class="mb-80">
      <!-- 產品 -->
      <div class="row">
        <!-- 產品圖片 -->
        <div class="col-12 col-lg-7 mb-24 mb-lg-0">
          <div
            class="mb-1"
            v-for="(image, key) in product.imagesUrl"
            :key="key"
          >
            <img class="img-fluid w-100 mb-8" :src="image" />
          </div>
        </div>
        <!-- 產品圖片 -->

        <!-- 產品資訊 -->
        <div class="col-12 col-lg-5">
          <div class="text-primary ff-zh ms-lg-40">
            <div class="mb-24">
              <h2 class="mb-24 mb-lg-16">{{ product.title }}</h2>
              <div
                v-if="product.origin_price === product.price"
                class="fs-20 fw-bold"
              >
                售價 {{ product.price }} 元
              </div>
              <div v-else>
                <del class="fs-14 text-secondary"
                  >原價 {{ product.origin_price }} 元</del
                >
                <div class="fs-20 fw-bold">售價 {{ product.price }} 元</div>
              </div>
            </div>

            <div class="mb-40">
              <p>數量</p>
              <select
                v-model="qty"
                class="bg-white w-50 py-8 px-8 border-primary text-primary"
              >
                <option v-for="qty in 5" :key="qty" :value="qty">
                  {{ qty }}
                </option>
              </select>
            </div>

            <a
              @click.prevent="addToCart(product.id, qty)"
              class="d-block btn btn-primary text-center rounded-0 mb-40"
              >加入購物車</a
            >
            <p class="mb-24">
              {{ product.content }}
            </p>

            <table class="w-100">
              <tr class="border-top border-bottom" height="80px">
                <td class="fw-bold">編號</td>
                <td>{{ product.unit }}</td>
              </tr>
              <tr class="border-top border-bottom" height="80px">
                <td class="fw-bold">分類</td>
                <td>{{ product.category }}</td>
              </tr>
              <tr class="border-top border-bottom" height="80px">
                <td class="fw-bold">尺寸</td>
                <td>{{ product.description }}</td>
              </tr>
            </table>
          </div>
        </div>
        <!-- 產品資訊 -->
      </div>
      <!-- 產品 -->

      <h4 class="mt-40 border-bottom border-secondary border-gray pb-8 mb-24 text-primary">推薦產品</h4>
      <ul class="d-md-flex justify-content-between m-0 p-0 ps-md-8">
        <li
          v-for="item in products.slice(0, 3)"
          :key="item.id"
          class="text-primary position-relative me-md-8 mb-16 mb-md-0"
        >
          <img class="w-100 mb-16 swipe-img" :src="item.imageUrl" alt="圖片" />
          <div class="ms-8">
            <h3 class="fs-20 fw-bold mb-2">{{ item.title }}</h3>
            <p class="fs-14 text-secondary">{{ item.unit }}</p>
          </div>
          <routerLink :to="`${item.id}`" class="stretched-link"></routerLink>
        </li>
      </ul>
      <router-link
        to="/products"
        class="w-100 d-flex justify-content-center align-items-center border-top border-bottom text-center text-secondary mt-40 py-8"
        ><span class="material-symbols-outlined me-4 align-middle">
          keyboard_return </span
        >返回列表</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
const { VITE_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {},
      qty: 1,
      products: []
    }
  },
  methods: {
    // 產品列表
    getProduct () {
      const { id } = this.$route.params
      axios
        .get(`${VITE_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
        })
    },
    ...mapActions(cartStore, ['addToCart']),
    getData () {
      const url = `${VITE_URL}/v2/api/${VITE_APP_PATH}/products/all`
      axios
        .get(url)
        .then((res) => {
          this.products = res.data.products
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getData()
    this.getProduct()
  }
}
</script>
