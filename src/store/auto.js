export default {
  namespaced: true,
  state: {
    price: 0,
  },
  mutations: {
    setPrice(state, price) {
      state.price = price;
    },
  },
  actions: {
    setPrice({ commit }, price) {
      commit('setPrice', price);
    },
  },
  getters: {
    price(state) {
      return state.price;
    },
  },
};
