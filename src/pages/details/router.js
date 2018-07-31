/**
 * Created by ChengZheLin on 2018/7/24.
 */
const Home = {
  Index: () => import('./Index.vue')
};

export default {
  path: '/details/:id',
  name: 'Details/Index',
  component: Home.Index,
  meta: { name: 'details' },
  children: []
};
