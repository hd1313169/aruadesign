<template>
  <div class="container ff-sans">
    <div class="text-end mb-16">
      <button
        @click="openModal('new')"
        class="btn btn-primary me-8"
        data-bs-toggle="modal"
        data-bs-target="#productModal"
      >
        建立新的產品
      </button>
      <router-link to="/admin/uploadImage" class="btn btn-outline-primary">上傳圖片</router-link>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">{{ item.origin_price }}</td>
          <td class="text-end">{{ item.price }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                @click="openModal('edit', item)"
                type="button"
                class="btn btn-outline-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#productModal"
              >
                編輯
              </button>
              <button
                @click="openModal('delete', item)"
                type="button"
                class="btn btn-outline-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#delProductModal"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 分頁 -->
    <PaginationComponent
      :pages="pages"
      :get-data="getData"
    ></PaginationComponent>
    <!-- 分頁 -->
  </div>

  <!-- 增編視窗元件 -->
  <ProductMoadl
    :temp-product="tempProduct"
    :update-product="updateProduct"
    :is-new="isNew"
    :create-Images="createImages"
    ref="productModals"
  ></ProductMoadl>
  <!-- 增編視窗元件 -->
  <!-- 刪除視窗元件 -->
  <DeleteModal
    :temp-product="tempProduct"
    :del-Product="delProduct"
    ref="delModals"
  ></DeleteModal>
  <!-- 刪除視窗元件 -->
</template>

<script>
import axios from 'axios'
import PaginationComponent from '../../components/PaginationComponent.vue'
import ProductMoadl from '../../components/ProductMoadl.vue'
import DeleteModal from '../../components/DeleteModal.vue'
const { VITE_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    PaginationComponent,
    ProductMoadl,
    DeleteModal
  },
  // 資料
  data () {
    return {
      products: [],

      // 判斷是否為新增資料
      isNew: false,

      // 存放被選取的資料
      tempProduct: {
        imagesUrl: []
      },

      pages: {}
    }
  },
  // 方法
  methods: {
    // 檢查權限
    checkAdmin () {
      axios
        .post(`${VITE_URL}/v2/api/user/check`)
        .then((res) => {
          this.getData()
        })
        .catch((err) => {
          alert(err.response.data.message)
          window.location = 'login.html'
        })
    },

    // 取得資料
    getData (page = 1) {
      axios
        .get(`${VITE_URL}/v2/api/${VITE_APP_PATH}/admin/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.pages = res.data.pagination
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },

    // 打開彈跳視窗
    openModal (isNew, item) {
      // 用openModdal回傳的參數，判斷是新增/編輯/刪除

      if (isNew === 'new') {
        // 回傳 new 為新增，開啟物件
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        this.$refs.productModals.openModal()
      } else if (isNew === 'edit') {
        this.tempProduct = { ...item } // 回傳 edit 為編輯，淺層拷貝資料到 tempProduct
        this.isNew = false
        this.$refs.productModals.openModal()
      } else if (isNew === 'delete') {
        this.tempProduct = { ...item } // 回傳 delete 為刪除，拷貝資料到 tempProduct，開啟刪除視窗
        this.$refs.delModals.openModal()
      }
    },

    // 更新產品
    updateProduct () {
      // 有新增、刪除兩種情況使用 let，預設為新增資料
      let url = `${VITE_URL}/v2/api/${VITE_APP_PATH}/admin/product`
      let http = 'post'

      // 編輯資料的情況
      if (!this.isNew) {
        url = `${VITE_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        http = 'put'
      }

      axios[http](url, { data: this.tempProduct }).then((res) => {
        alert(res.data.message) // 更新提示
        this.$refs.productModals.closeModal()
        this.getData() // 重新渲染
      })
    },

    // 刪除產品
    delProduct () {
      axios
        .delete(
          `${VITE_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        )
        .then((res) => {
          alert(res.data.message)
          this.$refs.delModals.closeModal()
          this.getData()
        })
    },

    // 新增圖片
    createImages () {
      this.tempProduct.imagesUrl = []
      this.tempProduct.imagesUrl.push('')
    }
  },
  // 生命週期
  mounted () {
    // 取出 Token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    axios.defaults.headers.common.Authorization = token

    this.checkAdmin()
  }
}
</script>
