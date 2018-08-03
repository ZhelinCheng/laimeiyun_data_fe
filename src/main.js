// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
/* eslint-disable */
import 'reset-css';
import './style/public.less';
import UiHeader from './components/UiHeader';
import UiFooter from './components/UiFooter';
import Tools from './tools/tools'
import store from './store'
import Api from './api';

import {
  Table,
  TableColumn,
  Button,
  Dialog,
  Message,
  Option,
  Icon,
  OptionGroup,
  Alert,
  MessageBox,
  Switch,
  Radio,
  RadioGroup,
  RadioButton } from 'element-ui';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Option);
Vue.use(Icon);
Vue.use(OptionGroup);
Vue.use(Alert);
Vue.use(Switch);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;


Vue.prototype.$tools = Tools;
Vue.prototype.$api = Api;
Vue.prototype.$isMobile = /iphone|android|windows phone/.test(navigator.userAgent.toLowerCase()) ? true : false;


Vue.component(UiHeader.name, UiHeader);
Vue.component(UiFooter.name, UiFooter);

Vue.config.productionTip = false;
Vue.config.productionTip = false;


/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    this.$store.dispatch('getMainData', {
      getHomeInfo: this.$api.getHomeInfo,
      formatTimeStamp: this.$tools.formatTimeStamp
    });
  }
});
