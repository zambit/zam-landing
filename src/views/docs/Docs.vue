<template>
  <section class="doc__section">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-md-8 mb-5">
          <h2 v-html="$t('token.title')" class="section-title"></h2>
        </div>
        <div class="col-12 col-md-8">
          <template v-for="(doc, index) in docs">
            <div :key="index" class="d-flex doc">
              <span v-html="doc.name" class="doc__name"></span>
              <a
                v-if="doc.en"
                :href="doc.en"
                target="_blank"
                rel="noreferrer noopener"
                class="ml-auto doc__link"
              >
                ENG
              </a>
              <a
                v-if="doc.kr"
                :href="doc.kr"
                target="_blank"
                rel="noreferrer noopener"
                class="ml-2 ml-md-5 doc__link"
              >
                한국어
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import onePagerEng from './ZamZam One-Pager English 13.11.18.pdf';
import onePagerKorean from './ZamZam One-Pager Korean 21.09.18.pdf';
import summaryEng from './ZamZam Summary English 13.11.18.pdf';
import whitePaperEng from './ZamZam Whitepaper English 13.11.18.pdf';

export default {
  name: 'token-page',
  computed: {
    docs() {
      return [
        {
          name: this.$t('token.tokenSaleWhitePaper'),
          en: whitePaperEng,
          kr: '',
        },
        {
          name: this.$t('token.summary'),
          en: summaryEng,
          kr: '',
        },
        {
          name: this.$t('token.onePager'),
          en: onePagerEng,
          kr: onePagerKorean,
        },
        {
          name: this.$t('token.technicalWhitePaper'),
          en: '',
          kr: '',
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";

.doc {
  padding: 26px 32px;
  border-radius: 18px;
  background-color: white;

  &:nth-child(2n+1) {
    background-color: #f9f9f9;
  }

  @include media-breakpoint-down(md) {
    padding: 26px 12px;
  }
}

.doc__section {
  display: flex;
  align-items: center;
  min-height: 80vh;
}

.doc__name {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  color: #2a3271;

  @include media-breakpoint-down(md) {
    font-size: 1rem;
  }
}

.doc__link {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.6px;
  text-align: center;
  color: $sky-blue;

  &:hover {
    text-decoration: underline;
  }

  @include media-breakpoint-down(md) {
    font-size: 1rem;
  }
}
</style>
