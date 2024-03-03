<template>
  <!-- 導覽列 -->
  <NavbarComponent></NavbarComponent>
  <!-- 導覽列 -->

  <!-- FAB -->
  <FloatButton></FloatButton>
  <!-- FAB -->

  <!-- 內容 -->
  <RouterView></RouterView>
  <!-- 內容 -->

  <!-- footer -->
  <FooterComponent></FooterComponent>
  <!-- footer -->
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FloatButton from '../components/FloatButton.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
  components: {
    NavbarComponent,
    FloatButton,
    FooterComponent
  }
}
</script>
