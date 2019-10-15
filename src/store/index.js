import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  activeIndex: sessionStorage.getItem('activeIndex') || 0  

}

const mutations = {
  setActiveIndex(state, opt) {
    console.log(opt)
    state.activeIndex = opt
    sessionStorage.setItem('activeIndex', opt)
  }
}

export default new Vuex.Store({
  state, mutations
})