const state = {
  user: null,
  list: []
}

const mutations = {
  'SET_USER' (state, user) {
    state.user = user
  },
  'REMOVE_USER' (state) {
    state.user = null
  },
  'GET_ALL_USERS' (state, list) {
    state.list = list
  }
}

export default {
  state,
  mutations
}
