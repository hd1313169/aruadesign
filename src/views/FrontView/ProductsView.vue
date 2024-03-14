<template>
  <div class="pb-160 pb-md-120"></div>
  <div class="container">
    <!-- submenu -->
    <div class="mb-40 mb-md-64">
      <h2 class="text-primary text-center mb-40">產品列表</h2>
      <ul class="d-flex flex-wrap justify-content-center p-0">
        <li class="products-submenu px-24 py-4 px-md-80 py-md-8">
          <routerLink :to="`/products`">全部</routerLink>
        </li>
        <li v-for="item in categories" :key="item" class="products-submenu px-24 py-4 px-md-80 py-md-8">
          <routerLink :to="`/products?category=${item}`">{{ item }}</routerLink>
        </li>
      </ul>
    </div>
    <!-- submenu -->

    <!-- 產品列表 -->
    <ul class="d-flex flex-wrap justify-content-between m-0 p-0">
      <li v-for="item in products" :key="item.id" class="products-item">
        <img class="img-fluid mb-8 mb-md-16" :src="item.imageUrl" alt="圖片" />
        <h4 class="mb-8">{{ item.title }}</h4>
        <p class="fs-14 mb-8">{{ item.content }}</p>
        <h5>
          <span class="fs-14 me-4">售價</span>{{ item.price }}
          <span class="fs-14">元</span>
        </h5>
        <routerLink
          :to="`product/${item.id}`"
          class="stretched-link"
        ></routerLink>
      </li>
    </ul>
    <!-- 產品列表 -->

    <nav aria-label="Page navigation" class="mb-80">
            <ul class="pagination justify-content-center">
                <li :class="{disabled: !pages.has_pre}" class="page-item">
                    <button type="button" @click="getData(pages.current_page - 1)" class="page-link border-0" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                <li v-for="(page, index) in pages.total_pages" :key="index"
                    :class="{active: page===pages.current_page}" class="page-item">
                    <button type="button" @click="getData(page)" class="page-link border-0">{{page}}</button>
                </li>

                <li :class="{disabled: !pages.has_next}" class="page-item">
                    <button type="button" @click="getData(pages.current_page + 1)" class="page-link border-0" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
  </div>
</template>

<script>
import axios from 'axios'

const { VITE_URL, VITE_APP_PATH } = import.meta.env

export default {
  // 資料
  data () {
    return {
      products: [],
      categories: ['客廳', '廚房', '書房', '燈飾', '臥房'],

      pages: {}
    }
  },
  watch: {
    'route.query': {
      handler () {
        this.getData()
      },
      deep: true
    }
  },
  methods: {
    // 取得資料
    getData (page = 1) {
      axios
        .get(
          `${VITE_URL}/v2/api/${VITE_APP_PATH}/products?page=${page}`
        )
        .then((res) => {
          this.products = res.data.products
          this.pages = res.data.pagination
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
