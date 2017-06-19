import Vue from 'vue'
import Router from 'vue-router'
import Pluszone from '@/components/Pluszone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pluszone/155'
    },
    { path: '/pluszone/:elearnCourseId', component: Pluszone }
  ]
})
