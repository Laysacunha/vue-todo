import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import FormLayout from '@/components/FormLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Layout
    },
    {
      path: '/addtask',
      name: 'AddTask',
      component: FormLayout
    }
  ]
})
