import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  activePath: 'home'  

}

const mutations = {
  setActivePath(state, opt) {
    state.activePath = opt
    sessionStorage.setItem('activePath', opt)
  }
}

export default new Vuex.Store({
  state, mutations
})