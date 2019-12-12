import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    }
  ]
})
