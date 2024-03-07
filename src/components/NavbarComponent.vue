<template>
  <nav class="navbar-light bg-light">
    <div class="container">
      <div
        class="d-flex flex-column flex-md-row justify-content-center justify-content-md-between py-24"
      >
        <div class="d-flex justify-content-center mb-24 mb-md-0">
          <routerLink class="navbar-brand logo" to="/">
            <img src="../assets/images/logo.svg" alt="aruadesign" />
          </routerLink>
        </div>

        <div class="d-flex justify-content-center">
          <ul class="navbar-nav align-items-center">
            <li class="nav-item me-24 me-sm-64 me-md-40">
              <router-link to="/" class="nav-link text-primary text-center"
                >首頁
              </router-link>
            </li>
            <li class="nav-item me-24 me-sm-64 me-md-40">
              <router-link
                to="products"
                class="nav-link text-primary text-center"
                >產品
              </router-link>
            </li>
            <li class="nav-item me-24 me-sm-64 me-md-40">
              <router-link to="about" class="nav-link text-primary text-center"
                >關於我們
              </router-link>
            </li>
            <li class="nav-item d-none d-md-block">
              <router-link
                to="carts"
                class="nav-link text-primary border border-primary rounded-circle d-flex justify-content-center align-items-center"
                style="width: 40px; height: 40px"
                ><span class="material-symbols-outlined">shopping_bag</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
