<template>
  <nav class="navbar">
    <div class="d-flex align-items-center">
      <router-link to="/">
        <svg class="navbar__logo">
          <use xlink:href="#logo"></use>
        </svg>
      </router-link>
      <span class="navbar__text-logo ml-3">zamzam</span>
    </div>
    <div class="d-flex align-items-center">
      <ul class="navbar__list">
        <template v-for="item in routes">
          <li :key="item.route" class="navbar__list-item">
            <router-link
              :to="item.route"
              class="navbar__list-link"
            >{{ item.name }}
            </router-link>
          </li>
        </template>
      </ul>
      <div class="navbar__select-lang locales-sb">
        <div class="locales-sb__item" @click="showLocales = true">
          <div
            class="locales-sb__flag"
            :style="{
            backgroundImage: `url(https://www.countryflags.io/${locales[currentLocale]}/flat/64.png)`
            }"
          ></div>
          <span class="locales-sb__name ml-2">{{ locales[currentLocale] }}</span>
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
                :key="locale"
                class="locales-sb__item"
                @click="setCurrentLocale(index)"
              >
                <div
                  class="locales-sb__flag"
                  :style="{ backgroundImage: `url(https://www.countryflags.io/${locale}/flat/64.png)` }"
                ></div>
                <span class="locales-sb__name ml-2">{{ locale }}</span>
              </div>
            </template>
          </div>
        </transition>
      </div>
      <router-link to="" class="navbar__btn">Login</router-link>
      <router-link to="" class="navbar__btn ml-3">Sign Up</router-link>
    </div>
  </nav>
</template>

<script>
import ClickOutside from 'vue-click-outside';

import './logo.svg';
import './down-arrow.svg';

export default {
  name: 'navbar',
  directives: {
    ClickOutside,
  },
  data() {
    return {
      showLocales: false,
      currentLocale: 0,
      locales: [
        'US',
        'RU',
        'TR',
      ],
      routes: [
        { route: '/', name: 'Home' },
        { route: '/team', name: 'Team' },
        { route: '/contacts', name: 'Contacts' },
      ],
    };
  },
  methods: {
    setCurrentLocale(index) {
      this.currentLocale = index;
      this.showLocales = false;
    },
    handleClickOutside() {
      this.showLocales = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";

.navbar {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  z-index: 9nav;
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

.navbar__select-lang {
  margin-right: 26px;
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
}

.locales-sb__arrow-icon {
  width: 9px;
  height: 5px;
}
</style>
