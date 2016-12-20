const Vue = require('vue');
const Vuex = require('vuex');
// const actions = require('./actions.js');

Vue.use(Vuex);

const initialState = {
  state1: false,
  state2: false,
};

const mutations = {
  SET_STATE(state) {
    state.state1 = true;
    for(var i = 0; i < 2000; i++) {
        console.log('inside mutation');
    }
    state.state2 = true;
  },
};

const mAction = ({ commit }, value) => {
    commit('SET_STATE');
}

module.exports = new Vuex.Store({
  state: initialState,
  mutations,
  actions: { mAction },
});
