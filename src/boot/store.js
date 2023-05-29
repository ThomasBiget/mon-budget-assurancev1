// src/boot/store.js
import { boot } from 'quasar/wrappers';
import { createStore } from 'vuex';

import auto from '../store/auto';
import habitation from '../store/habitation';
import sante from '../store/sante';
import prevoyance from '../store/prevoyance';

let Store = null;

export default boot(({ app }) => {
  Store = createStore({
    modules: {
      auto,
      habitation,
      sante,
      prevoyance,
    },
  });

  app.use(Store);
});

export function useStore() {
  return Store;
}
