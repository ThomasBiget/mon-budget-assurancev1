export default {
  namespaced: true,
  state: {
    bonus: 0,
    price: 0,
    assurance: '',
  },
  mutations: {
    setBonus(state, bonus) {
      state.bonus = bonus;
    },
    setPrice(state, price) {
      state.price = price;
    },
    setAssurance(state, assurance) {
      state.assurance = assurance;
    },
  },
  actions: {
    setBonus({ commit }, bonus) {
      commit('setBonus', bonus);
    },
    setPrice({ commit }, price) {
      commit('setPrice', price);
    },
    setAssurance({ commit }, assurance) {
      commit('setAssurance', assurance);
    },
  },
  getters: {
    bonus(state) {
      return state.bonus;
    },
    price(state) {
      return state.price;
    },
    assurance(state) {
      return state.assurance;
    },
  },
};
