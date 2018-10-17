<template>
  <div id="main">


    <section class="musthead">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-12 col-lg-6">
            <h1 v-html="$t('musthead.title')" class="musthead__title"></h1>
            <p v-html="$t('musthead.desc')" class="musthead__desc"></p>
            <form class="d-none d-md-flex mt-5" @submit.prevent="submitForm">
              <phone-input
                :phone="formData.phone"
                :guess-country-on-created="true"
                required
                @value="formData.phone = $event"
                @country="formData.country = $event"
              />
              <button type="submit" class="btn musthead__btn">Ok</button>
            </form>
            <div class="d-flex d-md-none align-items-center">
              <a
                v-if="appLink.length > 0"
                :href="appLink"
                target="_blank"
                rel="noreferrer noopener"
                class="product__button m-0 mr-5"
              >
                Get the app
              </a>
              <a
                href="https://itunes.apple.com/ru/app/zam-wallet/id1436344249?mt=8"
                target="_blank"
                ref="noreferrer noopener"
              >
                <svg class="musthead__app-icon">
                  <use xlink:href="#apple-logo"></use>
                </svg>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=zam.wallet "
                target="_blank"
                rel="noreferrer noopener"
                class="ml-4"
              >
                <svg class="musthead__app-icon">
                  <use xlink:href="#android-logo"></use>
                </svg>
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <video
              ref="video"
              class="musthead__pic d-none d-md-block"
              autoplay
              muted
              loop
            >
              <source src="./man-on-chair.mp4" />
              <source src="./man-on-chair.webm" />
            </video>
            <!--<video-->
            <!--ref="videoMobile"-->
            <!--class="d-md-none mt-5 mx-auto d-block"-->
            <!--style="max-width: 100%; height: auto;"-->
            <!--autoplay-->
            <!--muted-->
            <!--loop-->
            <!--&gt;-->
            <!--<source src="./phone.mp4"/>-->
            <!--<source src="./phone.webm"/>-->
            <!--</video>-->
            <!--<svg class="d-none d-md-block musthead__pic">-->
            <!--<use xlink:href="#man-on-chair"></use>-->
            <!--</svg>-->
            <img
              src="./main-phone-mobile.png"
              srcset="./main-phone-mobile@2x.png 2x, ./main-phone-mobile@3x.png 3x"
              alt=""
              class="d-md-none mt-5 mx-auto d-block"
              style="max-width: 100%; height: auto;"
            >
          </div>
        </div>
        <div class="row apps-row d-none d-md-flex">
          <div class="col-auto">
            <a
              href="https://itunes.apple.com/ru/app/zam-wallet/id1436344249?mt=8"
              target="_blank"
              ref="noreferrer noopener"
            >
              <svg class="musthead__app-icon">
                <use xlink:href="#apple-logo"></use>
              </svg>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=zam.wallet "
              target="_blank"
              rel="noreferrer noopener"
              class="ml-4"
            >
              <svg class="musthead__app-icon">
                <use xlink:href="#android-logo"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>


    <section class="product">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-7">
            <h2 v-html="$t('features.title')" class="product__title text-md-center"></h2>
          </div>
          <div class="col-12 col-md-8">
            <p v-html="$t('features.desc')" class="feature-desc mt-3 text-md-center"></p>
            <img
              src="./features-pic.jpg"
              srcset="./features-pic@2x.jpg 2x, ./features-pic@3x.jpg 3x"
              alt=""
              class="d-md-none w-100 h-auto"
            >
          </div>
        </div>
        <div class="d-none d-md-flex row mt-5">
          <div class="col-12 col-lg-3">
            <div class="feature-left">
              <h6 v-html="$t('features.openness.title')" class="feature-title"></h6>
              <p v-html="$t('features.openness.desc')" class="feature-desc"></p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="row no-gutters">
              <div class="col-12">
                <img
                  src="./features-pic.jpg"
                  srcset="./features-pic@2x.jpg 2x, ./features-pic@3x.jpg 3x"
                  alt=""
                  style="max-width: 100%"
                >
              </div>
              <div class="col-12 col-lg-6">
                <h6 v-html="$t('features.fairness.title')" class="feature-title"></h6>
                <p v-html="$t('features.fairness.desc')" class="feature-desc"></p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <div class="feature-right">
              <h6 v-html="$t('features.efficiency.title')" class="feature-title"></h6>
              <p v-html="$t('features.efficiency.desc')" class="feature-desc"></p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="product">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-5">
            <div v-html="$t('products.wallet.name')" class="product__name"></div>
            <h2 v-html="$t('products.wallet.title')" class="product__title"></h2>
            <p v-html="$t('products.wallet.desc')" class="product__desc"></p>
            <a
              v-html="$t('products.wallet.btn')"
              href="https://app.zam.io"
              target="_blank"
              rel="noreferrer noopener"
              class="d-none d-md-inline-flex product__button"
            ></a>
          </div>
          <div class="col-12 col-lg-7 col-xl-6">
            <svg class="d-md-none product__zam-wallet-pic">
              <use xlink:href="#zam-wallet-pic"></use>
            </svg>
            <video
              class="product__zam-wallet-pic d-none d-md-block"
              autoplay
              muted
              loop
            >
              <source src="./zam-wallet.mp4" />
            </video>
            <a
              v-html="$t('products.wallet.btn')"
              href="https://app.zam.io"
              target="_blank"
              rel="noreferrer noopener"
              class="d-md-none product__button mt-4"
            ></a>
          </div>
        </div>
      </div>
    </section>


    <section class="product">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6 order-1 order-md-0">
            <svg class="product__zam-merchant-pic d-md-none">
              <use xlink:href="#zam-merchant-pic"></use>
            </svg>
            <video
              class="product__zam-merchant-pic d-none d-md-block"
              autoplay
              muted
              loop
            >
              <source src="./zam-merchant.mp4" />
            </video>
            <!--<router-link to="" class="d-md-none product__button mt-4">-->
            <!--Read more-->
            <!--</router-link>-->
          </div>
          <div class="col-12 col-lg-6 order-0 order-md-1">
            <div v-html="$t('products.merchant.name')" class="product__name"></div>
            <h2 v-html="$t('products.merchant.title')" class="product__title"></h2>
            <p v-html="$t('products.merchant.desc')" class="product__desc"></p>
            <!--<router-link to="" class="d-none d-md-flex product__button">-->
            <!--Read more-->
            <!--</router-link>-->
          </div>
        </div>
      </div>
    </section>


    <section class="product">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-5">
            <div v-html="$t('products.chain.name')" class="product__name"></div>
            <h2 v-html="$t('products.chain.title')" class="product__title"></h2>
            <p v-html="$t('products.chain.desc')" class="product__desc"></p>
            <!--<router-link to="" class="d-none d-md-flex product__button">-->
            <!--Read more-->
            <!--</router-link>-->
          </div>
          <div class="col-12 col-lg-7">
            <svg class="product__zam-chain-pic d-md-none">
              <use xlink:href="#zam-chain-pic"></use>
            </svg>
            <video
              class="product__zam-chain-pic d-none d-md-block"
              autoplay
              muted
              loop
            >
              <source src="./zam-chain.mp4" />
            </video>
            <!--<router-link to="" class="d-md-none product__button mt-4">-->
            <!--Read more-->
            <!--</router-link>-->
          </div>
        </div>
      </div>
    </section>

    <section class="section-news">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 v-html="$t('news.title')" class="section-title"></h2>
          </div>
        </div>
        <div class="row news-row">
          <template v-for="(item, index) in news">
            <div
              :key="index"
              style="margin-top: 30px"
              class="col-12 col-sm-6 col-lg-4"
            >
              <a :href="item.url" target="_blank" rel="noreferrer noopener">
                <news-card
                  :news="item"
                  class="h-100"
                />
              </a>
            </div>
          </template>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto">
            <a
              v-html="$t('news.more')"
              href="https://medium.com/@zamzamofficial"
              target="_blank"
              rel="noreferrer noopener"
              class="news-btn"
            >
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="table__section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-title">
              <span v-html="$t('table.title')" class="dark-blue"></span>
            </h2>
          </div>
        </div>
        <div class="row mt-5 d-none d-md-flex">
          <div class="col-4"></div>
          <div class="col-4">
            <p v-html="$t('table.free')" class="text-center table__heading"></p>
          </div>
          <div class="col-4">
            <p v-html="$t('table.premium')" class="text-center table__heading"></p>
          </div>
        </div>

        <div class="row justify-content-center d-md-none no-gutters mt-4">
          <div class="col-auto text-center">
            <button
              type="button"
              :class="['table__btn-switch', { 'table__btn-switch--active' : showTableData === 'free'
               }]"
              @click="showTableData = 'free'"
            >Free
            </button>
          </div>
          <div class="col-auto text-center ml-4">
            <button
              type="button"
              :class="['table__btn-switch', { 'table__btn-switch--active' : showTableData ===
              'premium' }]"
              @click="showTableData = 'premium'"
            >Premium
            </button>
          </div>
        </div>

        <div class="row d-md-none mt-4">
          <template v-for="row in tableData">
            <div :key="row.title" class="col-12 table__row">
              <div class="row h-100 align-items-center">
                <div class="col-8">
                  <span v-html="row.title" class="table__title-m"></span>
                </div>
                <div class="col-4">
                  <span v-html="row[showTableData]" class="table__free-m"></span>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="row table d-none d-md-flex">
          <template v-for="row in tableData">
            <div :key="row.title" class="col-12 table__row">
              <div class="row h-100 align-items-center">
                <div class="col-4">
                  <div class="d-flex h-100">
                    <span class="table__title">{{ row.title }}</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="d-flex h-100 justify-content-center">
                    <span v-html="row.free" class="table__free"></span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="d-flex h-100 justify-content-center">
                    <span v-html="row.premium" class="table__premium"></span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>


    <section class="product product__footer-cta">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6">
            <h2 v-html="$t('alpha.title')" class="product__title"></h2>
            <form class="d-none d-md-flex mt-5" @submit.prevent="submitForm">
              <phone-input
                :phone="formData.phone"
                :guess-country-on-created="true"
                required
                @value="formData.phone = $event"
                @country="formData.country = $event"
              />
              <button type="submit" class="btn musthead__btn">Ok</button>
            </form>
            <div class="d-flex d-md-none align-items-center mt-5">
              <a
                v-if="appLink.length > 0"
                v-html="$t('getTheApp')"
                :href="appLink"
                target="_blank"
                rel="noreferrer noopener"
                class="product__button m-0 mr-5"
              >
              </a>
              <a
                href="https://itunes.apple.com/ru/app/zam-wallet/id1436344249?mt=8"
                target="_blank"
                ref="noreferrer noopener"
              >
                <svg class="musthead__app-icon">
                  <use xlink:href="#apple-logo"></use>
                </svg>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=zam.wallet "
                target="_blank"
                rel="noreferrer noopener"
                class="ml-4"
              >
                <svg class="musthead__app-icon">
                  <use xlink:href="#android-logo"></use>
                </svg>
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="d-flex justify-content-center mt-5">
              <img
                src="./phones.png"
                srcset="./phones@2x.png 2x, ./phones@3x.png 3x"
                class="phones"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
import axios from 'axios';
import md5 from 'md5';
import MobileDetect from 'mobile-detect';

import newsCard from '@/components/blocks/newsCard';
import phoneInput from '@/components/blocks/phoneInput';

import './android-logo.svg';
import './apple-logo.svg';
import './man-on-chair.svg';
import './zam-chain-pic.svg';
import './zam-wallet-pic.svg';
import './zam-merchant-pic.svg';

/* eslint-disable global-require */
export default {
  name: 'main-page',
  data() {
    return {
      formData: {
        phone: '',
        country: '',
      },
      showTableData: 'free',
      news: [
        {
          day: '17',
          tag: 'News',
          month: 'Sep',
          title: 'Zamzam launched sending crypto by cell phone number',
          author: 'zamzam',
          url: 'https://medium.com/@Zamzamofficial/zamzam-launched-sending-crypto-by-cell-phone-number-5335efd34d2a',
          thumb: {
            x1: require('./news--zamzam-launch.jpg'),
            x2: require('./news--zamzam-launch@2x.jpg'),
            x3: require('./news--zamzam-launch@3x.jpg'),
          },
        },
        {
          day: '14',
          tag: 'News',
          month: 'Sep',
          title: 'Namig Mamedov — New technical advisor to Zamzam',
          author: 'zamzam',
          url: 'https://medium.com/@Zamzamofficial/namig-mamedov-new-technical-advisor-to-zamzam-3c35257925f9',
          thumb: {
            x1: require('./news-namig-mamedov.jpg'),
            x2: require('./news-namig-mamedov@2x.jpg'),
            x3: require('./news-namig-mamedov@3x.jpg'),
          },
        },
        {
          day: '1',
          tag: 'News',
          month: 'Aug',
          title: 'Islamic Banking',
          author: 'zamzam',
          url: 'https://medium.com/@Zamzamofficial/islamic-banking-4196aff59a82',
          thumb: {
            x1: require('./news-islamic-banking.jpg'),
            x2: require('./news-islamic-banking@2x.jpg'),
            x3: require('./news-islamic-banking@3x.jpg'),
          },
        },
      ],
    };
  },
  components: {
    phoneInput,
    newsCard,
  },
  methods: {
    async submitForm() {
      const data = {
        phoneFull: this.formData.phone.replace(/ /g, ''),
        country: this.formData.country,
      };

      try {
        await axios.post('https://ico.zam.io/whitelist', {
          data: JSON.stringify(data),
        });
      } catch (e) {
        alert('Server error'); // eslint-disable-line
        return false;
      }

      const token = md5(this.formData.phone + process.env.VUE_APP_SECRET);
      this.$router.push({
        name: 'success',
        query: {
          token,
          phone: this.formData.phone,
        },
      });

      this.formData.phone = '';
      return true;
    },
    toggleVideoPlay() {
      this.$refs.video.pause();
      // this.$refs.videoMobile.pause();

      setTimeout(() => {
        this.$refs.video.play();
        // this.$refs.videoMobile.play();
      }, 1300);
    },
  },
  computed: {
    tableData() {
      return [
        {
          title: this.$t('table.data[0]'),
          free: this.$t('table.freeData[0]'),
          premium: this.$t('table.premiumData[0]'),
        },
        {
          title: this.$t('table.data[1]'),
          free: this.$t('table.freeData[1]'),
          premium: this.$t('table.premiumData[1]'),
        },
        {
          title: this.$t('table.data[2]'),
          free: this.$t('table.freeData[2]'),
          premium: this.$t('table.premiumData[2]'),
        },
        {
          title: this.$t('table.data[3]'),
          free: this.$t('table.freeData[3]'),
          premium: this.$t('table.premiumData[3]'),
        },
        {
          title: this.$t('table.data[4]'),
          free: this.$t('table.freeData[4]'),
          premium: this.$t('table.premiumData[4]'),
        },
        {
          title: this.$t('table.data[5]'),
          free: this.$t('table.freeData[5]'),
          premium: this.$t('table.premiumData[5]'),
        },
        {
          title: this.$t('table.data[6]'),
          free: this.$t('table.freeData[6]'),
          premium: this.$t('table.premiumData[6]'),
        },
        {
          title: this.$t('table.data[7]'),
          free: this.$t('table.freeData[7]'),
          premium: this.$t('table.premiumData[7]'),
        },
        {
          title: this.$t('table.data[8]'),
          free: this.$t('table.freeData[8]'),
          premium: this.$t('table.premiumData[8]'),
        },
      ];
    },
    appLink() {
      const md = new MobileDetect();

      switch (true) {
        case (md.os() === 'AndroidOS'):
          return 'https://play.google.com/store/apps/details?id=zam.wallet ';
        case (md.os() === 'iOS'):
          return 'https://itunes.apple.com/ru/app/zam-wallet/id1436344249?mt=8';
        default:
          return '';
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.toggleVideoPlay);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.toggleVideoPlay);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";

.product {
  display: flex;
  align-items: center;
  min-height: 100vh;

  @include media-breakpoint-down(md) {
    margin-top: 150px;
  }
}

.product__name {
  font-size: 1rem;
  letter-spacing: 2.3px;
  color: $sky-blue;
  text-transform: uppercase;
}

.product__title {
  font-size: 3.12500rem;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: 0.8px;
  color: #2a3271;
  margin-top: 20px;
  transition: font-size .2s ease;

  @include media-breakpoint-down(md) {
    font-size: 1.875rem;
    line-height: 1;
    letter-spacing: 1px;
  }
}

.product__desc {
  font-size: 1rem;
  line-height: 1.56;
  color: $silver;
  margin-top: 20px;
}

.product__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  padding: 0 15px;
  height: 70px;
  border-radius: 78px;
  background-color: #8de37f;
  box-shadow: 0 20px 42px -8px rgba(141, 227, 127, 0.82);
  font-size: 1.3125rem;
  font-weight: bold;
  letter-spacing: -0.7px;
  color: #ffffff;
  margin-top: 45px;
  transition: box-shadow .2s ease, font-size .2s ease;

  &:hover {
    box-shadow: none;
  }

  @include media-breakpoint-down(md) {
    width: 136px;
    height: 53px;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
}

.feature-title {
  font-size: 1.625rem;
  letter-spacing: 0.1px;
  color: $silver;
}

.feature-desc {
  font-size: 1rem;
  line-height: 1.56;
  color: $silver;
  margin-top: 19px;
}

.musthead {
  display: flex;
  align-items: center;
  min-height: 100vh;
  @include media-breakpoint-down(md) {
    padding-top: 30px;
  }
}

.musthead__title {
  font-size: 6.25rem;
  font-weight: bold;
  line-height: 1;
  letter-spacing: -3px;
  color: $sky-blue;

  @include media-breakpoint-down(md) {
    font-size: 3.625rem;
    line-height: 1;
  }
}

.musthead__desc {
  font-size: 1rem;
  line-height: 1.63;
  letter-spacing: 0.6px;
  color: #878ea7;
  margin-top: 30px;
}

.musthead__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 70px;
  border-radius: 78px;
  background-color: #8de37f;
  box-shadow: 0 20px 42px -8px rgba(141, 227, 127, 0.82);
  font-size: 1.3125rem;
  font-weight: 500;
  letter-spacing: -0.7px;
  color: #ffffff;
  margin-left: 8px;
  transition: box-shadow .2s ease;

  &:hover {
    box-shadow: none;
  }
}

.apps-row {
  margin-top: 130px;
  margin-bottom: 300px;
}

.musthead__app-icon {
  width: 30px;
  height: 35px;
  cursor: pointer;
  fill: #ececec;
  transition: fill .2s ease;

  &:hover {
    fill: #b1b1b1;
  }
}

.musthead__pic {
  width: 640px;
  height: 670px;
}

.product__zam-wallet-pic {
  width: 687px;
  height: 532px;

  @include media-breakpoint-down(lg) {
    width: 100%;
    height: 300px;
  }
}

.product__zam-merchant-pic {
  position: relative;
  left: -150px;
  width: 739px;
  height: 600px;

  @include media-breakpoint-down(lg) {
    left: 0;
    width: 100%;
    height: 300px;
  }
}

.product__zam-chain-pic {
  width: 727px;
  height: 601px;

  @include media-breakpoint-down(lg) {
    width: 100%;
    height: 300px;
  }
}

.feature-right {
  position: relative;
  top: 160px;
}

.feature-left {
  position: relative;
  top: 70px;
}

.news-row {
  margin-top: 24px;

  @include media-breakpoint-down(md) {
    margin-top: 0;
  }
}

.news-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 70px;
  font-size: 1.3125rem;
  font-weight: bold;
  letter-spacing: -0.7px;
  color: #ffffff;
  border-radius: 78px;
  background-color: #8de37f;
  box-shadow: 0 20px 42px -8px rgba(141, 227, 127, 0.82);
  margin-top: 80px;
  transition: box-shadow .2s ease;

  &:hover {
    box-shadow: none;
  }

  @include media-breakpoint-down(md) {
    margin-top: 32px;
    width: 200px;
    height: 53px;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
}

.table {
}

.table__row {
  height: 80px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 30px -8px rgba(190, 193, 197, 0.84);

  &:not(:first-child) {
    margin-top: 20px;
  }

  @include media-breakpoint-down(md) {
    height: 45px;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 0 4px 30px -8px rgba(190, 193, 197, 0.84);

    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}

.table__title {
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: #2f5e9b;
}

.table__free,
.table__premium {
  font-size: 1.5625rem;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: #2a3271;
}

.table__heading {
  font-size: 1.875rem;
  font-weight: 500;
  letter-spacing: -0.6px;
  text-align: center;
  color: $sky-blue;
}

.table__section {
  padding-top: 370px;

  @include media-breakpoint-down(md) {
    padding-top: 150px;
  }
}

.section-news,
.product__footer-cta {
  margin-top: 200px;

  @include media-breakpoint-down(md) {
    margin-top: 125px;
  }
}

.phones {
  @include media-breakpoint-down(md) {
    width: auto;
    height: 310px;
  }
}

.table__title-m {
  display: inline-block;
  font-size: 0.8125rem;
  line-height: 1;
  letter-spacing: -0.3px;
  color: #2f5e9b;
}

.table__free-m {
  display: block;
  font-size: 0.875rem;
  font-weight: normal;
  letter-spacing: -0.3px;
  color: #2a3271;
  text-align: right;
}

.table__btn-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 30px;
  border-radius: 24px;
  background-color: white;
  border: solid 1.3px $sky-blue;
  font-size: .875rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  color: $sky-blue;
  transition: color .2s ease, background-color .2s ease;

  &:focus {
    outline: none;
  }
}

.table__btn-switch--active {
  color: white;
  background-color: $sky-blue;
}
</style>
