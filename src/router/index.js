import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/FrontView/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/FrontView/AboutView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/FrontView/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/FrontView/ProductView.vue')
      },
      {
        path: 'carts',
        component: () => import('../views/FrontView/CartsView.vue')
      },
      {
        path: 'comfirm/:orderId',
        component: () => import('../views/FrontView/ComfirmView.vue')
      },
      {
        path: 'thankspage',
        component: () => import('../views/FrontView/ThanksPage.vue')
      }
    ]
  },
  // 登入頁
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  // 後台
  {
    path: '/admin',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'productsManage',
        component: () => import('../views/DahboardView/ProductsManage.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/DahboardView/OrderView.vue')
      },
      {
        path: 'uploadImage',
        component: () => import('../views/DahboardView/UploadImage.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
