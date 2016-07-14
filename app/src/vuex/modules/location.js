const state = {
  detail: null,
  list: {}
}

const mutations = {
  'SET_LOCATION' (state, location) {
    state.detail = location
  },
  'REMOVE_LOCATION' (state) {
    state.detail = null
  },
  'GET_ALL_LOCATIONS' (state, list) {
    state.list = list
  }
}

export default {
  state,
  mutations
}
