import { createStore } from "vuex";

export default createStore({
  state: {
    account: ''
  },
  mutations: { 
    setAccount(state, account){
      state.account = account;
    }
  },
  actions: {},
  modules: {},
});
