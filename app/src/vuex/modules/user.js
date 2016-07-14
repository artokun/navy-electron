const state = {
  detail: null,
  list: {}
}

const mutations = {
  'SET_USER' (state, user) {
    state.detail = user
  },
  'REMOVE_USER' (state) {
    state.detail = null
  },
  'GET_ALL_USERS' (state, list) {
    state.list = list
  }
}

export default {
  state,
  mutations
}
