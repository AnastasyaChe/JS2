import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
import SinglePage from '../views/singlePage.vue'
import ShoppingCart from '../views/shoppingCart.vue'
import Checkout from '../views/checkout.vue'
import Product from '../views/product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Main
  },
  {
    path: '/single page',
    name: 'Single Page',
    component: SinglePage
  },
  {
    path: '/shopping cart',
    name: 'Shopping Cart',
    component: ShoppingCart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
