import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/about'
import Home from '@/components/home'
import Products from '@/components/products'
import Sales from '@/components/sales'
import Contact from '@/components/contact'
import Community from '@/components/community'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/sales',
      name: 'sales',
      component: Sales
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    }
  ]
})
