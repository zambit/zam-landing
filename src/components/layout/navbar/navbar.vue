<template>
  <nav class="navbar">
    <div ref="wrap" class="navbar-wrap d-flex justify-content-between navbar-wrap--fixed">
      <div class="d-flex align-items-center">
        <router-link to="/" class="d-flex align-items-center">
          <svg class="navbar__logo">
            <use xlink:href="#logo"></use>
          </svg>
          <span
            :class="['navbar__text-logo ml-3', { 'd-inline' : showMobileNav }]"
          >zamzam</span>
        </router-link>
      </div>
      <div class="d-flex align-items-center">
        <ul class="d-none d-lg-flex navbar__list">
          <template v-for="item in routes">
            <li :key="item.route" class="navbar__list-item">
              <a
                v-if="item.external"
                :href="item.route"
                target="_blank"
                rel="noreferrer noopener"
                class="navbar__list-link">
                {{ item.name }}
              </a>
              <router-link
                v-else
                :to="item.route"
                class="navbar__list-link"
              >{{ item.name }}
              </router-link>
            </li>
          </template>
        </ul>
        <div class="navbar__select-lang locales-sb d-none d-lg-flex ">
          <div class="locales-sb__item" @click="showLocales = true">
            <div
              class="locales-sb__flag"
              :style="{
            backgroundImage:
            `url(https://www.countryflags.io/${locales[currentLocale].flag}/flat/64.png)`
            }"
            ></div>
            <span class="locales-sb__name ml-2">{{ locales[currentLocale].label }}</span>
            <svg class="locales-sb__arrow-icon ml-2">
              <use xlink:href="#down-arrow"></use>
            </svg>
          </div>
          <transition appear name="fade">
            <div
              v-if="showLocales"
              class="locales-sb__items"
            >
              <template v-for="(locale, index) in locales">
                <div
                  v-click-outside="handleClickOutside"
                  :key="locale.label"
                  class="locales-sb__item"
                  @click="setCurrentLocale(index)"
                >
                  <div
                    class="locales-sb__flag"
                    :style="{ backgroundImage:
                    `url(https://www.countryflags.io/${locale.flag}/flat/64.png)` }"
                  ></div>
                  <span class="locales-sb__name ml-2">{{ locale.label }}</span>
                </div>
              </template>
            </div>
          </transition>
        </div>
        <div class="navbar__app-wrap d-none d-lg-flex">
          <a
            href="https://itunes.apple.com/ru/app/zam-wallet/id1436344249?mt=8"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg class="navbar__app-icon">
              <use xlink:href="#apple-logo"></use>
            </svg>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=zam.wallet"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg class="navbar__app-icon ml-4">
              <use xlink:href="#android-logo"></use>
            </svg>
          </a>
        </div>
        <a
          v-html="$t('signIn')"
          href="https://app.zam.io/sign-in"
          target="_blank"
          rel="noreferrer noopener"
          :class="['navbar__btn navbar__btn--no-border mr-3 mr-lg-0',
          { 'd-none' : showMobileNav }]">
        </a>
        <a
          v-html="$t('signUp')"
          href="https://app.zam.io/sign-up"
          target="_blank"
          rel="noreferrer noopener"
          class="d-none d-lg-flex navbar__btn ml-3"
        >
        </a>
        <div class="d-lg-none">
          <transition appear name="fade">
            <div
              v-if="!showMobileNav"
              class="d-flex flex-column burger-wrap"
              @click="showMobileNav = true"
            >
              <div class="burger-line w-100"></div>
              <div class="burger-line w-75"></div>
              <div class="burger-line w-100"></div>
            </div>
            <div
              v-else
              class="d-flex w-100 h-100"
              @click="showMobileNav = false"
            >
              <svg class="navbar__icon-close">
                <use xlink:href="#icon-close"></use>
              </svg>
            </div>
          </transition>
        </div>
      </div>
      <div
        :class="['navbar-m', { 'navbar-m--open' : showMobileNav }]"
      >
        <ul class="d-flex flex-column list-unstyled mb-0">
          <template v-for="item in routes">
            <li :key="item.route" class="navbar__list-item mx-0 mb-3">
              <router-link
                :to="item.route"
                class="navbar__list-link"
              >{{ item.name }}
              </router-link>
            </li>
          </template>
        </ul>
        <div class="navbar__select-lang locales-sb">
          <div class="locales-sb__item px-0" @click="showLocales = true">
            <div
              class="locales-sb__flag"
              :style="{
            backgroundImage:
            `url(https://www.countryflags.io/${locales[currentLocale].flag}/flat/64.png)`
            }"
            ></div>
            <span class="locales-sb__name ml-2">{{ locales[currentLocale].label }}</span>
            <svg class="locales-sb__arrow-icon ml-2">
              <use xlink:href="#down-arrow"></use>
            </svg>
          </div>
          <transition appear name="fade">
            <div
              v-if="showLocales"
              class="locales-sb__items"
            >
              <template v-for="(locale, index) in locales">
                <div
                  v-click-outside="handleClickOutside"
                  :key="locale.label"
                  class="locales-sb__item"
                  @click="setCurrentLocale(index)"
                >
                  <div
                    class="locales-sb__flag"
                    :style="{ backgroundImage:
                    `url(https://www.countryflags.io/${locale.flag}/flat/64.png)` }"
                  ></div>
                  <span class="locales-sb__name ml-2">{{ locale.label }}</span>
                </div>
              </template>
            </div>
          </transition>
        </div>
        <div class="d-flex mt-5 pt-4">
          <a
            v-html="$t('signIn')"
            href="https://app.zam.io/sign-in"
            target="_blank"
            rel="noreferrer noopener"
            class="navbar__btn"
          >
          </a>
          <a
            v-html="$t('signUp')"
            href="https://app.zam.io/sign-up"
            target="_blank"
            rel="noreferrer noopener"
            class="navbar__btn ml-3"
          >
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ClickOutside from 'vue-click-outside';

import './logo.svg';
import './down-arrow.svg';
import './icon-close.svg';

export default {
  name: 'navbar',
  directives: {
    ClickOutside,
  },
  data() {
    return {
      showMobileNav: false,
      showLocales: false,
      currentLocale: 0,
      locales: [
        { label: 'en', flag: 'us' },
        { label: 'kr', flag: 'kr' },
      ],
    };
  },
  watch: {
    $route: {
      handler() {
        this.showMobileNav = false;
      },
      deep: true,
    },
  },
  methods: {
    setCurrentLocale(index) {
      this.currentLocale = index;
      this.showLocales = false;

      return this.$router.push({ params: { lang: this.locales[index].label } });
    },
    handleClickOutside() {
      this.showLocales = false;
    },
  },
  computed: {
    routes() {
      const { lang } = this.$route.params;
      return [
        {
          route: `/${lang}`,
          name: this.$t('navbar.home'),
          external: false,
        },
        {
          route: `/${lang}/team`,
          name: this.$t('navbar.team'),
          external: false,
        },
        {
          route: `/${lang}/docs`,
          name: this.$t('navbar.token'),
          external: false,
        },
        {
          route: `/${lang}/contacts`,
          name: this.$t('navbar.contacts'),
          external: false,
        },
      ];
    },
  },
  mounted() {
    this.currentLocale = this.locales.findIndex(el => el.label === this.$route.params.lang) || 0;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";

.navbar {
  position: relative;
  height: 80px;
  z-index: 9;
}

.navbar-wrap {
  background-color: white;
  padding: 20px 50px;

  @include media-breakpoint-down(lg) {
    padding: 20px 12px;
  }
}

.navbar-wrap--fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.navbar__logo {
  width: 40px;
  height: 40px;
}

.navbar__text-logo {
  font-size: 1.125rem;
  font-weight: bold;
  letter-spacing: 0.6px;
  color: #2a3271;

  @include media-breakpoint-down(lg) {
    display: none;
  }
}

.navbar__list {
  display: flex;
  list-style: none;
  margin-bottom: 0;
  margin-right: 36px;
}

.navbar__list-item {
  margin-left: 15px;
  margin-right: 15px;
}

.navbar__list-link {
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #343b5c;

  &:hover {
    text-decoration: underline;
  }
}

.navbar__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 40px;
  background-color: white;
  color: $sky-blue;
  border: solid 2px $sky-blue;
  border-radius: 20px;

  transition: color .2s ease, background-color .2s ease;

  &:hover {
    color: white;
    background-color: $sky-blue;
  }
}

.navbar__btn--no-border{
  @include media-breakpoint-down(md) {
    border: none;
  }
}

.locales-sb {
  position: relative;
}

.locales-sb__items {
  position: absolute;
  top: calc(100% + 15px);

  border: 1px solid #ececec;
  z-index: 99;

  & > .locales-sb__item:hover {
    background-color: $sky-blue;
    color: white;
  }
}

.locales-sb__item {
  display: flex;
  align-items: center;

  cursor: pointer;

  background-color: white;
  color: #343b5c;

  padding: 10px 15px;

  transition: background-color .2s ease, color .2s ease;
}

.locales-sb__flag {
  width: 19px;
  height: 19px;

  border-radius: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
}

.locales-sb__name {
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  color: inherit;
  text-transform: uppercase;
}

.locales-sb__arrow-icon {
  width: 9px;
  height: 5px;
}

.burger-wrap {
  display: flex;
  justify-content: center;

  width: 24px;
  height: 24px;

  cursor: pointer;
}

.burger-line {
  height: 2px;
  border-radius: 1px;
  background-color: $sky-blue;

  &:not(:first-child) {
    margin-top: 5px;
  }
}

.navbar-m {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  padding: 32px 12px;

  background-color: white;

  transform: translateX(150%);
  transition: transform .2s ease;
}

.navbar-m--open {
  transform: translateX(0);
}

.navbar__icon-close {
  width: 24px;
  height: 24px;

  cursor: pointer;
}

.navbar__app-wrap {
  display: flex;
  align-items: center;

  margin-left: $spacer * 2;
  margin-right: $spacer * 2;
}

.navbar__app-icon {
  width: 32px;
  height: 32px;

  fill: #b0b3be;

  &:hover {
    fill: #cfd0d6;
  }
}
</style>
