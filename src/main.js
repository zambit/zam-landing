import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/locales/en.json';
import App from './App.vue';
import router from './router';

import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages, // set locale messages
});

const loadedLanguages = ['en'];

function setI18nLanguage(lang) {
  i18n.locale = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

export default function loadLanguageAsync(lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/locales/${lang}.json`).then((msgs) => {
        i18n.setLocaleMessage(lang, msgs);
        loadedLanguages.push(lang);
        return setI18nLanguage(lang);
      });
    }
    return Promise.resolve(setI18nLanguage(lang));
  }
  return Promise.resolve(lang);
}

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
