import Vue from 'vue'
import Login from '@/pages/login/'

export default [
  {
    path: '/',
    redirect: '/login'
    // children: [
    //   {
    //     path: 'login',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
