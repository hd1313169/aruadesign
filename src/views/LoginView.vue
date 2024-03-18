<template>
  <div class="container">

        <div class="mt-80 mt-md-120">
            <h3 class="fw-bold text-center mb-24">後台登入</h3>

          <div class="row justify-content-center">
            <div class="col-12 col-lg-4">
              <form @submit.prevent="login()" id="form" class="form-signin">
                <div class="form-floating mb-16">
                  <input
                    v-model="user.username"
                    type="email"
                    class="form-control"
                    id="username"
                    placeholder="name@example.com"
                    required
                    autofocus
                  />
                  <label for="username">Email address</label>
                </div>
                <div class="form-floating mb-16">
                  <input
                    v-model="user.password"
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    required
                  />
                  <label for="password">Password</label>
                </div>
                <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                  登入
                </button>
              </form>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    login () {
      //   1. 抓登入 api
      //   2. post api、帳號、密碼到資料庫
      //   3. 取得cookie
      //   4. 跳轉到後台
      const api = `${VITE_URL}/v2/admin/signin`
      axios
        .post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data // 解構賦值
          document.cookie = `hexToken=${token}; expires=${new Date(
            expired
          )}; path=/`
          this.$router.push('/admin/productsManage')
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
