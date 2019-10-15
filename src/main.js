import Vue from 'vue'
import Vonic from 'vonic'
import routes from './router'
import store from './store'
import 'lib-flexible'

Vue.use(Vonic.app, {
  routes,
  store
})