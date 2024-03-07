<template>
  <div class="container">
    <!-- 麵包屑 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">首頁</a></li>
        <li class="breadcrumb-item active"><a href="#">產品</a></li>
        <!-- <li class="breadcrumb-item active" aria-current="page">Data</li> -->
      </ol>
    </nav>
    <!-- 麵包屑 -->

    <!-- submenu -->
    <div class="mb-40 mb-md-64">
      <h2 class="text-primary text-center mb-40">產品列表</h2>
      <ul class="d-flex flex-wrap justify-content-center p-0">
        <li class="products-submenu px-24 py-4 px-md-80 py-md-8">
          <a href="#">全部</a>
        </li>
        <li class="products-submenu px-24 py-4 px-md-80 py-md-8">
          <a href="#">客廳</a>
        </li>
        <li class="products-submenu px-24 py-4 px-md-80 py-md-8">
          <a href="#">廚房</a>
        </li>
        <li class="products-submenu px-24 py-4 px-md-80 py-md-8">
          <a href="#">書房</a>
        </li>
        <li class="products-submenu px-24 py-4 px-md-80 py-md-8">
          <a href="#">燈飾</a>
        </li>
        <li class="products-submenu px-24 py-4 px-md-80 py-md-8">
          <a href="#">其他</a>
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
        <h5><span class="fs-14 me-4">優惠價</span>{{ item.price }} <span class="fs-14">元</span></h5>
        <routerLink :to="`product/${item.id}`" class="stretched-link"></routerLink>
      </li>
    </ul>
    <!-- 產品列表 -->

    <nav class="mb-80" aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
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
      products: []
    }
  },
  methods: {
    // 取得資料
    getData () {
      const url = `${VITE_URL}/v2/api/${VITE_APP_PATH}/products/all`
      axios
        .get(url)
        .then((res) => {
          this.products = res.data.products
          console.log(this.products)
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
