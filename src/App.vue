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

export default {
  name: 'App',
  components: {
    navbar,
    vFooter,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
