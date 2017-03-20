// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'flex.css'
import './scripts/boot'
import './styles/common.less'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import FastClick from 'fastclick'


import request from './scripts/utils/request'

import App from './App'
import routes from './routes/'
import stores from './stores/'
import components from './components/' // 加载公共组件

// fastclick
// FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(request)

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, components[key])
})

// import eventModule from './vuex/eventModule'
// import store from './vuex/store'
// const store = new Vuex.Store(eventModule)

const router = new VueRouter({
  routes,
  mode: 'hash'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: stores,
  template: '<App/>',
  components: { App }
})
