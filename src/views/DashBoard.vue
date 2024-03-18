<template>
  <p class="w-100 bg-primary ff-sans fs-20 text-light text-center py-4 mb-8">後台管理</p>
    <div class="container ff-sans">
        <div class="d-flex justify-content-center">
    <RouterLink to="/admin/productsManage" class="me-16">產品管理</RouterLink> |
  <RouterLink to="/admin/orders" class="mx-16">訂單管理</RouterLink> |
  <RouterLink to="/" class="ms-16">回到前台</RouterLink>
  </div>
    </div>
  <!-- 內容 -->
  <RouterView></RouterView>
  <!-- 內容 -->
</template>

<script>
import axios from 'axios'
const { VITE_URL } = import.meta.env

export default {
  methods: {
    // 1. 檢查權限
    checkAdmin () {
      const url = `${VITE_URL}/v2/api/user/check`
      axios
        .post(url)
        .then(() => {})
        .catch((err) => {
          // 失敗就回到登入頁
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    }
  },
  // 事件
  // 檢查權限
  mounted () {
    // 1. 取出token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    axios.defaults.headers.common.Authorization = token

    // 2.檢查權限
    this.checkAdmin()
  }
}
</script>
