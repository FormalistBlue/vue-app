import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/404",
    name:"404",
    component:()=>import("@/views/404.vue"),
  },
  {
    path:"*",
    redirect: {name:"404"},
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("@/views/Login.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
