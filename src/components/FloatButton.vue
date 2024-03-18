<template>
  <div class="position-fixed end-0 bottom-0 mb-24 me-12 d-md-none fab">
    <router-link
    to="/carts"
      class="fab-btn nav-link text-primary bg-white border border-primary rounded-circle d-flex justify-content-center align-items-center"
      style="width: 48px; height: 48px"
                ><span class="material-symbols-outlined fs-32">shopping_bag</span>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-info text-center fs-10 d-flex justify-content-center align-items-center"
                  style="width: 24px; height: 24px"
                >
                  <!-- 可選串聯 -->
                  {{ this.carts?.carts?.length }}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/cartStore'

export default {
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart'])
  },
  mounted () {
    this.getCart()
  }
}
</script>
