<template>
  <div class="container success-container d-flex align-items-center">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-md-7">
        <h1 v-html="$t('successPage.title')" class="success-title"></h1>
      </div>
      <div class="col-12 col-md-6">
        <p v-html="$t('successPage.desc')" class="success-desc mt-5"></p>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'md5';

export default {
  name: 'success-page',
  beforeCreate() {
    if (md5(this.$route.query.phone + process.env.VUE_APP_SECRET) !== this.$route.query.token) {
      this.$router.push(`/${this.$route.params.lang}/`);
    }
  },
};
</script>

<style lang="scss" scoped>
.success-container {
  min-height: 80vh;
}

.success-title {
  font-size: 6.25rem;
  font-weight: bold;
  line-height: 1.15;
  letter-spacing: -3px;
  text-align: center;
  color: #2a3271;
}

.success-desc {
  font-size: 1rem;
  line-height: 1.56;
  text-align: center;
  color: #858997;
}
</style>
