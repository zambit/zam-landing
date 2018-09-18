import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';

import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages: {
    en: require('@/locales/en.json'), // eslint-disable-line
    kr: require('@/locales/kr.json'), // eslint-disable-line
  },
});

export default function setI18nLanguage(lang) {
  i18n.locale = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
