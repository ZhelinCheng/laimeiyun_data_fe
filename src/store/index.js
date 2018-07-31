/**
 * Created by ChengZheLin on 2018/7/29.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import base from './modules/base';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainData: []
  },
  modules: {
    base
  }
});
