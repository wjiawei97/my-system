const REGISTER = "REGISTER";

export default {
  state: {},
  mutations: {
    [REGISTER](state, payload) {}
  },
  actions: {
    register({ commit }, payload) {
      commit(REGISTER, payload);
    }
  }
};
