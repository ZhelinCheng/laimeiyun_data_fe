/**
 * Created by ChengZheLin on 2018/7/24.
 */
const Doc = {
  Index: () => import('./Index.vue')
};

export default {
  path: '/doc',
  name: 'Doc/Index',
  component: Doc.Index,
  meta: { name: 'doc' },
  children: []
};
