import Vue from 'vue';
import Router from 'vue-router';

import Contacts from '@/views/contacts';
import Team from '@/views/team';
import Main from '@/views/main';

import loadLanguageAsync from '@/main';

Vue.use(Router);

const router = new Router({
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
      path: '/',
      redirect: '/:lang',
    },
    {
      path: '/:lang/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/:lang/team',
      name: 'team',
      component: Team,
    },
    {
      path: '/:lang',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Main,
    },
  ],
});

router.beforeEach((to, from, next) => {
  let { lang = null } = to.params;

  if (!lang) {
    lang = window.navigator.language.split('-')[0]
      || window.navigator.userLanguage.split('-')[0];
  }

  return loadLanguageAsync(lang).then(() => next());
});

export default router;
