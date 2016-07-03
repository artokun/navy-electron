const state = {
  user: null
}

const mutations = {
  'SET_USER' (state, user) {
    state.user = user
  },
  'REMOVE_USER' (state) {
    state.user = null
  }
}

export default {
  state,
  mutations
}
