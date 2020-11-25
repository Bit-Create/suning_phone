import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    models: [false, false, false]
  },
  mutations: {
    setmodels(state, index) {
      for(let i = 0; i < 3; i++) {
        if (i == index) {
          state.models[i] = true
        } else {
          state.models[i] = false
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
