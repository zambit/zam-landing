<template>
  <div id="app">
    <navbar />
    <router-view />
    <v-footer />
  </div>
</template>

<script>
import navbar from '@/components/layout/navbar';
import vFooter from '@/components/layout/footer';

import pkg from '../package.json';

export default {
  name: 'App',
  components: {
    navbar,
    vFooter,
  },
  mounted() {
    console.log(pkg.version); // eslint-disable-line
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
