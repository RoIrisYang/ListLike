import Main from './components/main/Main'
import Login from './components/main/Login'
import List from './components/main/List'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter({
  history: false
})

router.map({
  '/': {
    name: 'main',
    component: Main
  },
  '/login': {
    name: 'login',
    component: Login
  },
  '/list': {
    name: 'list',
    component: List
  }
})

export default router
