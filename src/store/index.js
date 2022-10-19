import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      isLoggedIn: false,
      user: null,
      exc: '',
      sesion: '',
      isAdmin: false,
      usrRequest:false,
      usrPlan:false,
      fromMyPlan:false
    }
  },
  mutations: {
    CHANGE_ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload;
    },CHANGE_USER_STORE(state, payload) {
      state.user = payload;
    },CHANGE_EXC_STORE(state, payload) {
      state.exc = payload;
    },CHANGE_USER_SESSION(state, payload) {
      state.sid = payload;
    },CHANGE_ISADMIN(state, payload) {
      state.isAdmin = payload;
    },
    CHANGE_USR_REQUEST(state, payload) {
      state.usrRequest = payload;
    },
    CHANGE_USR_PLAN(state, payload) {
      state.usrPlan = payload;
    },
  
  },
  actions: {
    changeIsloggedin(store, payload) {
      store.commit('CHANGE_ISLOGGEDIN', payload);
    },
    userStore(store, payload) {
      store.commit('CHANGE_USER_STORE', payload);
    },
    excStore(store, payload) {
      store.commit('CHANGE_EXC_STORE', payload);
    },
    session(store, payload) {
      store.commit('CHANGE_USER_SESSION', payload);
    },
    changeIsAdmin(store, payload) {
      store.commit('CHANGE_ISADMIN', payload);
    },
    changeUsrRequest(store, payload) {
      store.commit('CHANGE_USR_REQUEST', payload);
    },
    changeUsrPlan(store, payload) {
      store.commit('CHANGE_USR_PLAN', payload);
    },
   
  },
  modules: {
  }
})