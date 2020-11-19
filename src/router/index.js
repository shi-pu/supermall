import Vue from 'vue'
import VueRouter from 'vue-router'


//安装插件
Vue.use(VueRouter)

//创建router
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: "主页"
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: "分类"
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: "购物车"
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: "我的"
    }
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

//导出
export default router
