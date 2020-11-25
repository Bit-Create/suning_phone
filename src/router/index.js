import Vue from 'vue'
import VueRouter from 'vue-router'

const Phone = () => import('../views/PhoneList')
const CAT = () => import('../views/StoreCat')
const Detailed = () => import('../views/StoreDetailed')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/phone'
  },
  {
    path: '/phone',
    meta: {
      title: '手机-苏宁易购',
      name: 'phone'
    },
    component: Phone
  },
  {
    path: '/cat',
    meta: {
      title: '我的购物车-苏宁易购',
      name: 'cat'
    },
    component: CAT
  },
  {
    path: '/detailed',
    mata: {
      title: '',
    },
    component: Detailed
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to , from,next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
