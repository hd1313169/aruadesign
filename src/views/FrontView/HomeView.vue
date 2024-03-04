<template>
  <div class="container">
    <!-- 品牌訴求 -->
    <div class="py-80 py-md-160 text-primary">
      <div class="row justify-content-md-between align-items-end mb-40">
        <div class="col-lg-7">
          <p class="fs-64 lh-lg mb-16 mb-sm-24 mb-md-0">
            Brilliance of Beauty, <br />
            Achieved by Aura.
          </p>
        </div>
        <div class="col-lg-4">
          <p>
            璨然之美，沐光所臻。
            受到自然光輝的啟發，在我們精心製作的每一件家具中體現了精緻和高雅的本質。每個設計都反映了我們對創新和卓越的承諾。
            從極簡主義線條到精緻的裝飾細節，所有元素都被精心挑選，以喚起永恆美感和無與倫比和諧的空間。
          </p>
        </div>
      </div>

      <div class="">
        <img
          class="w-100 d-none d-md-block"
          src="../../assets/images/hero.png"
          alt="hero"
        />
        <img
          class="w-100 d-md-none"
          src="../../assets/images/hero-mobile.png.png"
          alt="hero"
        />
      </div>
    </div>
    <!-- 品牌訴求 -->

    <!-- 關於我們 -->
    <div class="position-relative text-primary mb-120 mb-md-160">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <img class="w-100" src="../../assets/images/about.png" alt="about" />
        </div>
        <div class="col-12 col-md-4 offset-md-1">
          <h2 class="mb-24 mt-80 mb-mt-120">關於沐光</h2>
          <p>
            沐光設計致力於打造充滿光彩和美感的家具。我們將自然光的靈感融入每一件作品中，注重細節和品質。無論您喜歡簡約風格還是典雅設計，我們都能滿足您的需求。我們的家具展現了永恆的美感和高雅，讓您的空間散發著獨特的魅力。讓沐光設計為您的家增添亮點和舒適感，讓您享受精緻生活。
          </p>
        </div>
      </div>
      <p class="d-none d-md-block text-deco fs-120 text-gray-light">
        Brilliance of Beauty, Achieved by Aura.
      </p>
    </div>
    <!-- 關於我們 -->
  </div>

  <!-- 精選商品 -->
  <div class="mb-80 mb-md-120">
    <!-- 標題 -->
    <div class="container">
      <div
        class="d-flex justify-content-between align-items-center text-primary"
      >
        <h2>精選商品</h2>
        <a class="d-flex align-items-start" href="#">
          <span class="me-4">查看全部</span>
          <span class="material-symbols-outlined">
            keyboard_double_arrow_right
          </span>
        </a>
      </div>
    </div>

    <!-- 輪播 -->
    <div class="swiper productSwiper mt-16 mt-md-40">
      <ProductSwiper></ProductSwiper>
    </div>
    <!-- 輪播 -->
  </div>
  <!-- 精選商品 -->

  <!-- 服務 -->
  <div class="bg-secondary py-60 py-sm-80 mb-40 mb-md-80 text-white">
    <div class="container">
      <div class="row justify-content-center mb-40">
        <div class="col-12 col-lg-4 mb-40 mb-lg-0">
          <h2 class="mb-24">客製化服務</h2>
          <p>
            我們提供客製化服務，讓您的家具設計完全符合您的個人品味和空間需求。無論是您對尺寸、材質、風格還是功能有特定要求，我們都能為您量身打造獨一無二的家具。。無論您是要為您的家裡還是商業空間打造獨特風格，我們都將竭誠為您提供最優質的客製化服務，讓您的夢想成真。
          </p>
        </div>
        <div class="col-12 col-md-10 col-lg-4 offset-lg-1">
          <img
            class="w-100"
            src="../../assets/images/serve-process.svg"
            alt="serve"
          />
        </div>
      </div>

      <div class="row align-items-end">
        <div class="col-12 col-md-6">
          <img class="w-100" src="../../assets/images/serve-1.png" alt="serve" />
        </div>
        <div class="col-12 col-md-3">
          <img class="w-100" src="../../assets/images/serve-2.png" alt="serve" />
        </div>
        <div class="col-12 col-md-3">
          <img class="w-100" src="../../assets/images/serve-3.png" alt="serve" />
        </div>
      </div>
    </div>
  </div>
  <!-- 服務 -->
</template>

<script>
import ProductSwiper from '../../components/ProductSwiper.vue'
export default {
  components: {
    ProductSwiper
  }
}
</script>

<style scoped></style>
