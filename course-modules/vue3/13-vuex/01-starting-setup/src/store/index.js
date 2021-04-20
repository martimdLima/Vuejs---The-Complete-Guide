import { createStore } from 'vuex';

import rootMutations from "./mutations";
import rootActions from "./actions";
import rootGetters from "./getters"

import authModule from "./modules/auth/index.js";
import counterModule from "./modules/counter/index.js"

const store = createStore({
    modules: {
      numbers: counterModule,
      auth: authModule
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
  });

  export default store;