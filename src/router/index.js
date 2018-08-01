import Vue from 'vue';
import Router from 'vue-router';
import Root from '@/pages/Root';
import Home from '@/pages/home/router';
import Details from '@/pages/details/router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Root,
      children: [Home, Details]
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
