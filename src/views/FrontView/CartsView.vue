<template>
  <div class="pb-160 pb-md-80"></div>
  <div class="container">
    <!-- 麵包屑 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">首頁</a></li>
        <li class="breadcrumb-item active" aria-current="page">購物車</li>
      </ol>
    </nav>
    <!-- 麵包屑 -->

    <!-- 標題 -->
    <div class="d-flex justify-content-between align-items-end mb-8 mt-40">
      <h2 class="text-primary">購物車</h2>
      <button class="border-0 text-gray">全部刪除</button>
    </div>

    <!-- 購物車列表 -->
    <table class="table align-middle">
      <!-- 表頭 -->
      <thead>
        <tr>
          <th class="text-primary">品名</th>
          <th class="text-primary">數量</th>
          <th class="text-primary">小計</th>
          <th class="text-primary">刪除</th>
        </tr>
      </thead>
      <!-- 表頭 -->
      <tbody>
        <!-- 列表 -->
        <tr v-for="item in carts.carts" :key="item.id">
          <!-- 資訊 -->
          <td class="py-40 text-primary">
            <div class="d-flex align-items-center">
              <img :src="item.product.imageUrl" alt="圖片" class="me-16 d-none d-md-block" style="width: 10%;" />
            <div>
              <p class="fw-bold">{{ item.product.title }}</p>
            <p>${{ item.product.price }}</p>
            </div>
            </div>
          </td>

          <td>
            <input
              v-model="item.qty"
              @change="adjustQty(item, item.qty)"
              min="1"
              type="number"
              class="form-control text-center w-75"
            />
          </td>
          <td>
            <p class="text-end">${{ item.total }}</p>
          </td>
          <td>
            <button class="btn ms-auto d-block">
              <span
                class="material-symbols-outlined text-gray text-end align-middle"
              >
                close
              </span>
            </button>
          </td>
          <!-- 資訊 -->
        </tr>
        <!-- 列表 -->
      </tbody>
    </table>
    <!-- 購物車列表 -->

    <!-- 計算 -->
    <div class="row justify-content-end text-primary mb-48 mb-md-80">
      <div class="col-12 col-lg-3 col-md-6">
        <!-- 優惠券 -->
        <!-- <div
          class="d-flex justify-content-between align-items-center py-24 py-md-40 border-bottom"
        >
          <p class="me-16">優惠券</p>
          <select class="py-8 px-8 pe-80 border-primary text-primary">
            <option>請選擇優惠券</option>
            <option>1</option>
          </select>
        </div> -->
        <!-- 優惠券 -->

        <!-- 總計 -->
        <div
          class="d-flex justify-content-between align-items-center py-16 py-md-24"
        >
          <p class="me-16 text-primary">總計</p>
          <p class="fs-20 fw-bold text-end">${{ carts.total }}</p>
        </div>
        <!-- 總計 -->
      </div>
    </div>
    <!-- 計算 -->

    <!-- 訂購人資料 -->
    <div class="mb-80">
      <h2 class="text-primary">訂購人資料</h2>
      <div class="row text-primary">
        <div class="col-12 col-md-6 mb-24">
          <label for="title" class="form-label mb-2">姓名</label>
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="請輸入姓名"
          />
        </div>
        <div class="col-12 col-md-6 mb-24">
          <label for="title" class="form-label mb-2">信箱</label>
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="請輸入信箱"
          />
        </div>
        <div class="col-12 col-md-6 mb-24">
          <label for="title" class="form-label mb-2">電話</label>
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="請輸入電話"
          />
        </div>
        <div class="col-12 col-md-6 mb-24">
          <label for="title" class="form-label mb-2">地址</label>
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="請輸入地址"
          />
        </div>
        <div class="col-12 mb-40">
          <textarea class="w-100 form-control rounded-0" rows="4"></textarea>
        </div>

        <div class="col-12 col-md-4 offset-md-4">
          <button class="w-100 btn btn-primary rounded-0">確認訂單</button>
        </div>
      </div>
    </div>
    <!-- 訂購人資料 -->
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore'
import axios from 'axios'
const { VITE_URL, VITE_APP_PATH } = import.meta.env

export default {
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),

    // 調整購物車數量
    adjustQty (item, qty = 1) {
      // put 的 order 參數
      const order = {
        product_id: item.product_id,
        qty
      }

      axios
        .put(`${VITE_URL}/v2/api/${VITE_APP_PATH}/${item.id}`, { data: order })
        .then((res) => {
          // 更新購物車
          this.getCart()
        })
    }
  },
  mounted () {}
}
</script>
