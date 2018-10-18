import * as types from '../mutation-types'

// State
export const state = {
  todo: null
}

// Getters
export const getters = {
  todo: state => state.todo
}

// Mutations
export const mutations = {
  [types.SAVE_TODO] (state, { todo }) {
    state.todo = todo
  },
  [types.UPDATE_TODO] (state, { todo }) {
    state.todo = todo
  },
  [types.REMOVE_TODO] (state, { todo }) {
    state.todo = todo
  }
}

// Actions
export const actions = {
  saveUser ({ commit }, payload) {
    commit(types.SAVE_TODO, payload)
  },
  updateUser ({ commit }, payload) {
    commit(types.UPDATE_TODO, payload)
  },
  removeUser ({ commit }, payload) {
    commit(types.REMOVE_TODO, payload)
  }
}
