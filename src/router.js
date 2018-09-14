import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "page-main" */ '@/views/Contacts'),
    },
    {
      path: '/team',
      name: 'team',
      component: () => import(/* webpackChunkName: "page-main" */ '@/views/team/Team'),
    },
    {
      path: '/',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "page-main" */ '@/views/main/Main'),
    },
  ],
});
