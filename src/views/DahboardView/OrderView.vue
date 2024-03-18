<template>
  <!-- <div>{{orders}}</div> -->
  <div class="container ff-sans">
    <table class="table mt-40">
      <thead>
        <tr>
          <th width="120">訂單編號</th>
          <th width="100">品項數</th>
          <th width="100">總計</th>
          <th width="120">訂購人</th>
          <th width="100">付款狀態</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.num }}</td>
          <td>${{ item.total }}</td>
          <td>{{ item.user.name }}</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else>未付款</span>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 分頁 -->
    <PaginationComponent
      :pages="pages"
      :get-data="getOrders"
    ></PaginationComponent>
    <!-- 分頁 -->
  </div>

</template>

<script>
import axios from 'axios'
import PaginationComponent from '../../components/PaginationComponent.vue'

const { VITE_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    PaginationComponent
  },
  data () {
    return {
      orders: [],
      pages: {}
    }
  },
  methods: {
    getOrders (page = 1) {
      axios
        .get(`${VITE_URL}/v2/api/${VITE_APP_PATH}/orders?page=${page}`)
        .then((res) => {
          this.orders = res.data.orders
        })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
