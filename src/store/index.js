import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 0
  },
  mutations: {
    setID(state, id) {
      state.id = id
    }
  },
  actions: {
  },
  modules: {
  }
})
