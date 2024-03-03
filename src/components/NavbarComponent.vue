<template>
  <nav class="navbar-light bg-light">
    <div class="container">
      <div
        class="d-flex flex-column flex-md-row justify-content-center justify-content-md-between py-24"
      >
        <div class="d-flex justify-content-center mb-24 mb-md-0">
          <a class="navbar-brand logo" href="#">
            <img src="../assets/images/logo.svg" alt="aruadesign" />
          </a>
        </div>

        <div class="d-flex justify-content-center">
          <ul class="navbar-nav align-items-center">
            <li class="nav-item me-24 me-sm-64 me-md-40">
              <router-link to="/">
                <a class="nav-link text-primary text-center" href="#">首頁</a>
              </router-link>
            </li>
            <li class="nav-item me-24 me-sm-64 me-md-40">
              <router-link to="products">
                <a class="nav-link text-primary text-center" href="#">產品</a>
              </router-link>
            </li>
            <li class="nav-item me-24 me-sm-64 me-md-40">
              <router-link to="about">
                <a class="nav-link text-primary text-center" href="#"
                  >關於我們</a
                >
              </router-link>
            </li>
            <li class="nav-item d-none d-md-block">
              <router-link to="carts">
                <a
                  class="nav-link text-primary border border-primary rounded-circle d-flex justify-content-center align-items-center"
                  style="width: 40px; height: 40px"
                  href="#"
                  ><span class="material-symbols-outlined"
                    >shopping_bag</span
                  ></a
                >
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
