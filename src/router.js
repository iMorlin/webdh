import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { View: "Home" },
    component: () => import("./components/Home.vue")
  },
  {
    path: '/Catalog',
    name: 'Catalog',
    meta: { View: "Catalog" },
    component: () => import("./components/Catalog.vue")
  },
  {
    path: '/Cart',
    name: 'Cart',
    meta: { View: "Cart" },
    component: () => import("./components/Cart.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

