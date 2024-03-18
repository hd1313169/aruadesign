<template>
  <div class="container py-24">
    <div class="mx-auto w-50">
      <input
        @change="upload()"
        type="file"
        class="form-control mb-8"
        id="file"
        placeholder="請輸入圖片連結"
      />
      <div>
        <p>預覽圖片</p>
    <div id="imageUrl" class="border" style="width: 800px; height: 400px"></div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_URL, VITE_APP_PATH } = import.meta.env

const imageUrl = document.querySelector('#imageUrl')

export default {
  data () {},
  methods: {
    upload () {
      // 取出 Token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      axios.defaults.headers.common.Authorization = token

      // #1 撰寫上傳的 API 事件
      const fileInput = document.querySelector('#file')
      const file = fileInput.files[0]

      const formData = new FormData()
      formData.append('file-to-upload', file)

      axios
        .post(`${VITE_URL}/api/${VITE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          console.log(res.data.imageUrl)
          imageUrl.innerHTML = `<img src="${res.data.imageUrl}" alt="">`
        })
    }
  }
}
</script>
