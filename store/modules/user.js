import * as types from '../mutation-types'

// State
export const state = {
  user: null
}

// Getters
export const getters = {
  user: state => state.user
}

// Mutations
export const mutations = {
  [types.SAVE_USER] (state, { user }) {
    state.user = user
  },
  [types.UPDATE_USER] (state, { user }) {
    state.user = user
  },
  [types.REMOVE_USER] (state, { user }) {
    state.user = user
  }
}

// Actions
export const actions = {
  saveUser ({ commit }, payload) {
    commit(types.SAVE_USER, payload)
  },
  updateUser ({ commit }, payload) {
    commit(types.UPDATE_USER, payload)
  },
  removeUser ({ commit }, payload) {
    commit(types.REMOVE_USER, payload)
  }
}
