<template>
  <swiper
  :loop="true"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :slidesPerView="1.1"
    :spaceBetween="2"
    :breakpoints="{
      500: {
        slidesPerView: 1.5,
        spaceBetween: 2,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 4,
      },
      992: {
        slidesPerView: 2.2,
        spaceBetween: 8,
      },
    }"
    :modules="modules"
    class="productSwiper"
  >
    <swiper-slide v-for="item in products" :key="item.id">
      <div class="text-primary position-relative">
        <img class="mb-16 swipe-img" :src="item.imageUrl" alt="圖片" />
        <div class="ms-8">
          <h3 class="fs-20 fw-bold mb-2">{{ item.title }}</h3>
          <p class="fs-14 text-secondary">{{ item.unit }}</p>
        </div>
        <routerLink :to="`product/${item.id}`" class="stretched-link"></routerLink>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import axios from 'axios'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

// import required modules
import { Pagination } from 'swiper/modules'

const { VITE_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination]
    }
  },

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
