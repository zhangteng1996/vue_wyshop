import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import msite from './modules/msite'
import cate from './modules/cate'
import topic from './modules/topic'
import search from './modules/search'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  modules: {
    msite,
    cate,
    topic,
    search
  }
})
