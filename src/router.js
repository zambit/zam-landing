import Vue from 'vue';
import Router from 'vue-router';

import Contacts from '@/views/contacts';
import Team from '@/views/team';
import Main from '@/views/main';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
    },
    {
      path: '/',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Main,
    },
  ],
});
