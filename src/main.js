// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
/* eslint-disable */
import 'reset-css';
/* eslint-enable */


import UiHeader from './components/UiHeader';
import UiFooter from './components/UiFooter';

Vue.component(UiHeader.name, UiHeader);
Vue.component(UiFooter.name, UiFooter);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
