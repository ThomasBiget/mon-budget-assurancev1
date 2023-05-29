import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import auto from './auto';
import habitation from './habitation';
import sante from './sante';
import prevoyance from './prevoyance';

// creation d'un store pour chaque module

export default store((/* { ssrContext } */) => {
  const Store = new Vuex.Store({
    modules: {
      auto,
      habitation,
      sante,
      prevoyance,
    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });
  return Store;
});
