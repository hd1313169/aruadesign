<template>
  <div class="container">
    <!-- 麵包屑 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">首頁</a></li>
        <li class="breadcrumb-item"><a href="#">產品</a></li>
        <li class="breadcrumb-item active" aria-current="page">產品內頁</li>
      </ol>
    </nav>
    <!-- 麵包屑 -->

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
                name=""
                id=""
                class="w-50 py-8 px-8 border-primary text-primary"
              >
                <option v-for="qty in 5" :key="qty" :value="qty">
                  {{ qty }}
                </option>
              </select>
            </div>

            <a
              href="#"
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
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const { VITE_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      axios
        .get(`${VITE_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          console.log(this.product.imageUrl)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
