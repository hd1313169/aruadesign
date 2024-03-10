<template>
  <nav class="navbar-light bg-light position-fixed w-100 header pt-8 pb-4 pt-md-16 pb-md-8">
    <div class="container ">
      <div
        class="d-flex flex-column flex-md-row justify-content-center justify-content-md-between"
      >
        <div class="d-flex justify-content-center mb-16 mb-md-0">
          <routerLink class="navbar-brand logo" to="/">
            <img src="../assets/images/logo.svg" alt="aruadesign" />
          </routerLink>
        </div>

        <div class="d-flex justify-content-center">
          <ul class="navbar-nav align-items-center">
            <li class="nav-item mx-12 mx-sm-32 mx-md-20">
              <router-link to="/" class="nav-link text-primary text-center"
                >首頁
              </router-link>
            </li>
            <li class="nav-item mx-12 mx-sm-32 mx-md-20">
              <router-link
                to="/products"
                class="nav-link text-primary text-center"
                >產品
              </router-link>
            </li>
            <li class="nav-item mx-12 mx-sm-32 mx-md-20">
              <router-link to="/about" class="nav-link text-primary text-center"
                >關於我們
              </router-link>
            </li>
            <li class="nav-item d-none d-md-block ms-md-20">
              <router-link
                to="/carts"
                class="position-relative nav-link text-primary border border-primary rounded-circle d-flex justify-content-center align-items-center"
                style="width: 40px; height: 40px"
                ><span class="material-symbols-outlined">shopping_bag</span>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-info text-center fs-10 d-flex justify-content-center align-items-center"
                  style="width: 22px; height: 22px"
                >
                  <!-- 可選串聯 -->
                  {{ this.carts?.carts?.length }}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
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
