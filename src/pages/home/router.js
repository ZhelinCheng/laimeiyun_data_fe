/**
 * Created by ChengZheLin on 2018/7/24.
 */
const Home = {
  Index: () => import('./Index.vue')
};

export default {
  path: '/',
  name: 'Home/Index',
  component: Home.Index,
  meta: { name: 'home' },
  children: []
};
