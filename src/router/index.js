import Vue from 'vue'
import VueRouter from 'vue-router'

const Phone = () => import('../views/PhoneList')
const CAT = () => import('../views/StoreCat')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/store'
  },
  {
    path: '/store',
    meta: {
      title: '商品列表'
    },
    component: Phone
  },
  {
    path: '/cat',
    meta: {
      title: '购物车'
    },
    component: CAT
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
