<template>
  <swiper
    :slidesPerView="1.2"
    :spaceBetween="4"
    :breakpoints="{
      768: {
        slidesPerView: 1.2,
        spaceBetween: 8,
      },
      992: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
    }"
    :centeredSlides="true"
    :loop="true"
    :autoplay="{
      delay: 2000,
    }"
    :modules="modules"
    class="productSwiper"
  >
    <swiper-slide>
      <div class="text-primary position-relative">
        <img class="mb-16" src="../assets/images/product-1-1.png" alt="1" />
        <div>
          <h3 class="fs-20 fw-bold">夢幻靜謐 布質L型沙發</h3>
          <p>座面採用S型彈簧、泡棉，可動式頭枕，可拆式設計</p>
        </div>
        <a href="#" class="stretched-link"></a>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

// import required modules
import { Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination]
    }
  }
}
</script>
