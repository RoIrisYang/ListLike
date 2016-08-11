import Main from './components/main/Main'
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
  '/list': {
    name: 'list',
    component: List
  }
})

export default router
