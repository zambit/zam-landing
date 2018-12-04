<template>
  <div id="main">
    <section class="musthead">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-7 col-xl-5">
            <div class="d-flex flex-column musthead__wrapper">
              <h1 v-html="$t('musthead.title')" class="musthead__title"></h1>
              <h3 v-html="$t('musthead.subtitle')" class="musthead__subtitle"></h3>
              <p v-html="$t('musthead.desc')" class="musthead__desc"></p>
              <div class="d-flex d-md-none align-items-center justify-content-between">
                <a :href="appLink" class="get-app-link">Get app</a>
                <div class="d-flex align-items-center">
                  <a
                    href="https://itunes.apple.com/ru/app/zam-wallet/id1436344249?mt=8"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <svg class="musthead__app-icon">
                      <use xlink:href="#apple-logo"></use>
                    </svg>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=zam.wallet"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <svg class="musthead__app-icon ml-4">
                      <use xlink:href="#android-logo"></use>
                    </svg>
                  </a>
                </div>
              </div>
              <form
                class="d-none d-md-flex align-items-end musthead__form"
                @submit.prevent="submitForm"
              >
                <phone-input
                  :phone="formData.phone"
                  :code="formData.code"
                  :guess-country-on-created="true"
                  required
                  @value="formData.phone = $event"
                  @code="formData.code = $event"
                  @country="formData.country = $event"
                />
                <button type="submit" class="btn musthead__btn">Go</button>
              </form>
            </div>
          </div>
          <div class="col-12 col-md-5 col-xl-4 offset-xl-1 col-xxl-3 offset-xxl-2">
            <img
              class="musthead__pic mx-auto"
              src="./main.png"
              srcset="./main@2x.png 2x, ./main@3x.png 3x"
              alt=""
            >
          </div>
          <div class="col-12 col-xl-2">
            <div class="d-none d-md-none d-xl-flex flex-column align-items-center">
              <a
                href="https://itunes.apple.com/ru/app/zam-wallet/id1436344249?mt=8"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg class="banner-app-store">
                  <use xlink:href="#banner-app-store"></use>
                </svg>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=zam.wallet"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg class="banner-google-play">
                  <use xlink:href="#banner-google-play"></use>
                </svg>
              </a>
            </div>

            <div class="d-none d-md-flex d-xl-none musthead__bottom-app-row">
              <a
                href="https://itunes.apple.com/ru/app/zam-wallet/id1436344249?mt=8"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg class="musthead__app-icon musthead__app-icon--bottom">
                  <use xlink:href="#apple-logo"></use>
                </svg>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=zam.wallet"
                target="_blank"
                class="ml-4"
                rel="noreferrer noopener"
              >
                <svg class="musthead__app-icon musthead__app-icon--bottom ml-3">
                  <use xlink:href="#android-logo"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="section section-kyc">
      <div class="container">
        <div class="row align-items-center h-100">
          <div class="col-12 order-2 d-md-none d-lg-none d-xl-none d-xxl-none">
            <div
              class="d-flex align-items-center justify-content-center"
            >
              <svg class="banner banner-saltedge">
                <use xlink:href="#banner-saltedge"></use>
              </svg>
              <svg class="banner banner-jumio">
                <use xlink:href="#banner-jumio"></use>
              </svg>
            </div>
          </div>
          <div class="col-12 col-md-5 col-xl-4 col-xxl-4 offset-xl-1 order-1 order-md-0">
            <img
              data-v-4bb18f76="" src="./kyc.png"
              srcset="./kyc@2x.png 2x, ./kyc@3x.png 3x" alt=""
              class="phone-pic px-xxl-5"
            >
          </div>
          <div class="col-12 col-md-7 col-xl-5 offset-xxl-2 offset-xl-1"><h2
            class="title"
          >Identity verification in 2 minutes</h2>
            <p class="section-text mb-4">No need to fill in numerous forms and attach
              photos</p>
            <div class="mb-3 mb-md-3 mb-xl-4"><span class="kyc-title">3 minutes</span>
              <p class="kyc-text">Passport scanning and face scanning with your
                smartphone
                camera</p></div>
            <div><span class="kyc-title">1 minute</span>
              <p class="kyc-text">Identity verification and AML via your bank
                account in one of our
                2500 partner banks worldwide</p>
              <div
                class="d-none d-md-flex mt-5"
              >
                <svg class="banner banner-saltedge">
                  <use xlink:href="#banner-saltedge"></use>
                </svg>
                <svg class="banner banner-jumio">
                  <use xlink:href="#banner-jumio"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="section section-virtual-cards">
      <div class="container">
        <div class="row align-items-center h-100">
          <div class="col-12 col-md-7 col-xl-4 offset-xl-1">
            <div class="d-flex justify-content-center section-text-wrap">
              <div><h2 class="title">Instant access to&nbsp;your
                virtual card</h2>
                <p class="section-text">Start using the service just after the
                  registration.
                  Do online shopping and NFC payments with a virtual card.</p>
                <div class="mt-5 mt-md-0 mt-md-5 d-none d-md-flex">
                  <svg class="banner banner-google-pay">
                    <use xlink:href="#banner-google-pay"></use>
                  </svg>
                  <svg class="banner banner-apple-pay">
                    <use xlink:href="#banner-apple-pay"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 col-xl-4 offset-xl-2">
            <img
              src="./face-id.png"
              srcset="./face-id@2x.png 2x, ./face-id@3x.png 3x" alt=""
              class="phone-pic px-xxl-5"
            >
          </div>
          <div class="col-12 col-xl-2 d-md-none">
            <div class="d-flex align-items-center justify-content-center">
              <svg class="banner banner-google-pay">
                <use xlink:href="#banner-google-pay"></use>
              </svg>
              <svg class="banner banner-apple-pay">
                <use xlink:href="#banner-apple-pay"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="section section-physical-cards">
      <div class="container">
        <div class="row align-items-center h-100">
          <div
            class="col-12 col-md-5 order-md-0 col-xl-6 col-xxl-4 offset-xxl-1
             order-1 order-xl-0">
            <img
              class="phone-pic credit-card d-none d-md-block"
              src="./credit-card.png"
              srcset="./credit-card@2x.png 2x, ./credit-card@3x.png 3x"
              alt=""
            />

            <img
              class="phone-pic credit-card d-md-none"
              src="./credit-card-rotated.png"
              srcset="./credit-card-rotated@2x.png 2x, ./credit-card-rotated@3x.png 3x"
              alt=""
            />
          </div>
          <div class="col-12 col-md-6 offset-md-1 col-xl-5 offset-xl-1 col-xxl-4 offset-xxl-2">
            <h2 class="title">Even more possibilities with a physical card</h2>
            <p class="section-text mb-0 mb-md-auto">Multicurrency cash is always with you. Withdraw
              money at
              any ATM worldwide with a minimal fee. We are not earning
              on you, just covering the costs.</p>
          </div>
        </div>
      </div>
    </section>


    <section class="section section-deposit-money">
      <div class="container">
        <div class="row align-items-center h-100">
          <div class="col-12 col-md-7 col-xl-5 offset-xl-1">
            <div class="section-text-wrap">
              <h2 class="title">Replenish your account in any convenient way with minimal
                commissions</h2>
              <p class="section-text mb-0 mb-md-auto">Replenish your zam.account with any bank card
                with 2% commission
                only. We’d like to make it free, but Visa, MasterCard and your card
                issuing bank have their conditions.</p>
              <div
                class="d-none d-md-flex mt-5 align-items-center justify-content-md-center
                justify-content-lg-start"
              >
                <svg class="banner banner-visa flex-shrink-0">
                  <use xlink:href="#banner-visa"></use>
                </svg>
                <img
                  src="./banner-mastercard.png"
                  srcset="./banner-mastercard@2x.png 2x, ./banner-mastercard@3x.png 3x" alt=""
                  class="banner banner-mastercard"
                >
                <svg class="banner banner-union-pay flex-shrink-0">
                  <use xlink:href="#banner-union-pay"></use>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 col-xl-4 offset-xl-1 col-xxl-4 offset-xxl-1">
            <img
              src="./deposit.png"
              srcset="./deposit@2x.png 2x, ./deposit@3x.png 3x" alt=""
              class="phone-pic px-xxl-5"
            >
          </div>
          <div class="col-12 col-xl-2 d-md-none d-lg-none">
            <div class="d-flex align-items-center justify-content-center flex-wrap">
              <svg class="banner banner-visa">
                <use xlink:href="#banner-visa"></use>
              </svg>
              <img
                src="./banner-mastercard.png"
                srcset="./banner-mastercard@2x.png 2x, ./banner-mastercard@3x.png 3x" alt=""
                class="banner banner-mastercard"
              >
              <svg class="banner banner-union-pay">
                <use xlink:href="#banner-union-pay"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="section section-exchange-fiat">
      <div class="container">
        <div class="row align-items-center justify-content-between h-100">
          <div
            class="order-1 order-md-0
            col-12 col-md-5 col-xl-4 offset-xl-1 col-xxl-4 offset-xxl-1">
            <img
              src="./exchange.png"
              srcset="./exchange@2x.png 2x, ./exchange@3x.png 3x" alt=""
              class="phone-pic px-xxl-5"
            >
          </div>
          <div class="col-12 col-md-7 col-xl-6 offset-xl-1 col-xxl-5 offset-xxl-2">
            <h2 class="title">Exchange fiat and digital money at genuine exchange rates</h2>
            <p class="section-text mb-0 mb-md-auto">Transparent exchange rates for any currency.
              We provide exchange
              services at average market rates and with fixed withdrawal fee (0.5%).
              Traditional banks exchange rates are 2-10% higher.</p>
          </div>
        </div>
      </div>
    </section>


    <section class="section section-send-money">
      <div class="container">
        <div class="row align-items-center h-100">
          <div class="col-12 col-md-7 order-md-1 order-xl-0 col-xl-5 offset-xxl-1 col-xxl-5">
            <div class="section-text-wrap">
              <h2 class="title">Instant remittances via a&nbsp;telephone number</h2>
              <p class="section-text mb-0 mb-md-auto">
                Send money to friends and relatives by a phone number
                only.
                Even if they don’t have Zam.account, they will receive payment
                after a simple authentication.</p>
              <svg class="d-none coins-mobile coins-mobile-lg d-md-block mt-5">
                <use xlink:href="#coins-mobile"></use>
              </svg>
            </div>
          </div>
          <div class="col-12 col-md-5 col-xl-4 offset-xl-2 col-xxl-4 offset-xxl-1">
            <img
              class="phone-pic px-xxl-5"
              src="./send.png"
              srcset="./send@2x.png 2x, ./send@3x.png 3x"
              alt=""
            />
          </div>
          <div class="col-12 col-xl-2 d-md-none d-lg-none">
            <div class="d-flex justify-content-center">
              <svg class="coins d-none d-md-block">
                <use xlink:href="#coins"></use>
              </svg>
              <svg class="coins-mobile d-md-none">
                <use xlink:href="#coins-mobile"></use>
              </svg>
            </div>
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
        <div class="row justify-content-center news-row">
          <div class="col-12 col-xxl-10">
            <div class="row justify-content-center">
              <template v-for="(item, index) in news">
                <a
                  :key="index"
                  :href="item.url"
                  class="mx-3 mt-4"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <news-card
                    :news="item"
                  />
                </a>
              </template>
            </div>
          </div>
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
import './banner-app-store.svg';
import './banner-google-play.svg';
import './banner-saltedge.svg';
import './banner-jumio.svg';
import './banner-apple-pay.svg';
import './banner-google-pay.svg';
import './banner-visa.svg';
import './banner-union-pay.svg';
import './coins.svg';
import './coins-mobile.svg';

/* eslint-disable global-require */
export default {
  name: 'main-page',
  data() {
    return {
      formData: {
        code: '',
        phone: '',
        country: '',
      },
      showTableData: 'free',
      news: [
        {
          day: '30',
          tag: 'News',
          month: 'Oct',
          title: 'News Zamzam Digest #03',
          author: 'zamzam',
          url: 'https://medium.com/@Zamzamofficial/news-zamzam-digest-03-29e1e68b91e3',
          thumb: {
            x1: require('./news-zamzam-digest-02.jpg'),
            x2: require('./news-zamzam-digest-02@2x.jpg'),
            x3: require('./news-zamzam-digest-02@3x.jpg'),
          },
        },
        {
          day: '23',
          tag: 'News',
          month: 'Oct',
          title: 'News Zamzam Digest #02',
          author: 'zamzam',
          url: 'https://medium.com/@Zamzamofficial/news-zamzam-digest-02-94afa5f704bb',
          thumb: {
            x1: require('./news-zamzam-digest-03.jpg'),
            x2: require('./news-zamzam-digest-03@2x.jpg'),
            x3: require('./news-zamzam-digest-03@3x.jpg'),
          },
        },

        {
          day: '17',
          tag: 'News',
          month: 'Sep',
          title: 'Zamzam launched sending crypto by cell phone number',
          author: 'zamzam',
          url: 'https://medium.com/@Zamzamofficial/zamzam-welcomes-samy-naceri-to-the-team-64960c6b0c05',
          thumb: {
            x1: require('./medium-news.jpg'),
            x2: require('./medium-news@2x.jpg'),
            x3: require('./medium-news@3x.jpg'),
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
        phoneFull: `${this.formData.code}${this.formData.phone}`,
        country: this.formData.country,
      };

      try {
        await axios.post('https://ico.zam.io/whitelist', {
          data: JSON.stringify(data),
        });
      } catch (e) {
        // alert('Server error'); // eslint-disable-line
        // return false;
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
  },
  computed: {
    appLink() {
      const md = new MobileDetect(window.navigator.userAgent);

      switch (true) {
        case (md.os() === 'AndroidOS'):
          return 'https://play.google.com/store/apps/details?id=zam.wallet ';
        case (md.os() === 'iOS'):
          return 'https://itunes.apple.com/ru/app/zam-wallet/id1436344249?mt=8';
        default:
          return 'https://app.zam.io';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";

.musthead {
  display: flex;
  align-items: center;
  min-height: 100vh;

  @include media-breakpoint-down(lg) {
    min-height: auto;
    padding-top: 180px;
    padding-bottom: 180px;
  }

  @include media-breakpoint-down(sm) {
    padding-top: 0;
    padding-bottom: 102px;
    margin-bottom: 0;
  }
}

.musthead__wrapper {
  margin: 0 36px;

  @include media-breakpoint-down(xl) {
    margin: 0;
  }
}

.musthead__title {
  font-size: 5.625rem;
  font-weight: bold;
  line-height: 1;
  color: $sky-blue;

  @include media-breakpoint-down(lg) {
    font-size: 4.125rem;
    line-height: 1;
  }

  @include media-breakpoint-down(sm) {
    font-size: 3.625rem;
  }
}

.musthead__subtitle {
  font-size: 1.875rem;
  color: #2a3271;

  margin-top: $spacer;
  margin-bottom: 0;

  @include media-breakpoint-down(sm) {
    margin-top: 2px;
    font-size: 0.9375rem;
  }
}

.musthead__desc {
  font-size: 1rem;
  line-height: 1.25;
  color: #858997;
  margin-top: $spacer * 2.5;

  @include media-breakpoint-down(lg) {
    margin-top: 50px;
  }

  @include media-breakpoint-down(sm) {
    margin-top: 18px;
    margin-bottom: 40px;
  }
}

.musthead__form {
  margin-top: 94px;

  @include media-breakpoint-down(lg) {
    margin-top: 32px;
  }
}

.musthead__app-icon--bottom {
  width: 44px;
  height: 44px;
}

.musthead__btn {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 17px 57px;

  font-size: 1.375rem;
  line-height: 1;
  color: #ffffff;

  border-radius: 30px;
  box-shadow: 3px 20px 35px 0 rgba(141, 227, 127, 0.4);
  background-color: rgb(122, 216, 107);

  margin-left: $spacer * 2;

  transition: box-shadow .2s ease, background-color .2s ease;

  &:hover {
    box-shadow: none;
  }

  @include media-breakpoint-down(lg) {
    padding: 12px 40px;
    margin-left: $spacer;
  }
}

.apps-row {
  margin-top: 130px;
  margin-bottom: 300px;
}

.musthead__app-icon {
  width: 32px;
  height: 32px;
  cursor: pointer;
  fill: #b0b3be;
  transition: fill .2s ease;

  &:hover {
    fill: #cfd0d6;
  }
}

.musthead__pic {
  width: 100%;

  @include media-breakpoint-down(sm) {
    display: block;
    max-width: 232px;

    margin-top: 84px;
  }
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
  font-weight: 500;
  color: #ffffff;
  border-radius: 70px;
  box-shadow: 3px 20px 35px 0 rgba(141, 227, 127, 0.4);
  background-color: rgb(122, 216, 107);
  margin-top: 90px;

  transition: box-shadow .2s ease, background-color .2s ease;

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

.section-news {
  margin-top: 100px;
  margin-bottom: 230px;

  @include media-breakpoint-down(md) {
    margin-top: 125px;
  }
}

.section {
  padding: 50px 0;
  font-size: 1vh;

  @include media-breakpoint-down(lg) {
    padding: 110px 0;
  }

  @include media-breakpoint-down(sm) {
    padding: 50px 0;
  }

  & .container {
    height: 100vh;

    @include media-breakpoint-down(lg) {
      height: auto;
    }
  }
}

.section-kyc,
.section-physical-cards,
.section-exchange-fiat {
  background-color: #f4fafc;
}

.title {
  font-size: 2.625rem;
  font-weight: bold;
  line-height: 1.26;
  color: #2a3271;

  margin-bottom: $spacer * 2.5;

  @include media-breakpoint-down(lg) {
    margin-bottom: $spacer * 1.75;
    font-size: 2.25rem;
  }

  @include media-breakpoint-down(sm) {
    font-size: 1.875rem;
    line-height: 1.33;
  }
}

.section-text {
  font-size: 1.125rem;
  line-height: 1.56;
  color: #858997;

  @include media-breakpoint-down(lg) {
    font-size: 1rem;
  }
}

.banner-app-store {
  margin-bottom: 44px;
}

.banner-app-store,
.banner-google-play {
  width: 200px;
  height: 77px;

  transition: transform .2s ease;

  &:hover {
    transform: scale(1.1);
  }
}

.banner {
  width: 160px;
  height: 105px;

  &:first-child {
    margin-left: -10px;
  }

  &.banner-mastercard {
    height: auto;
  }

  @include media-breakpoint-down(lg) {
    width: 133px;
    height: 106px;
  }
}

.banner-saltedge,
.banner-google-pay,
.banner-visa {
 @include media-breakpoint-down(lg) {
   margin-left: -20px;
 }
}

.banner-union-pay {
  @media all and (max-width: 425px){
    margin-top: -30px;
  }
}

.phone-pic {
  width: 100%;

  @include media-breakpoint-down(sm) {
    display: block;
    max-width: 175px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
  }
}

.credit-card {
  @include media-breakpoint-down(sm) {
    max-width: 180px;
  }
}

.get-app-link {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38;
  color: #ffffff;

  padding: 16px 32px;

  border-radius: 30px;
  box-shadow: 3px 20px 35px 0 rgba(141, 227, 127, 0.4);
  background-color: rgb(122, 216, 107);

  transition: box-shadow .2s ease;

  &:hover {
    box-shadow: none;
  }
}

.kyc-title {
  font-size: .75rem;
  font-weight: bold;
  line-height: 1.67;
  color: $sky-blue;

  margin-bottom: $spacer * .25;
}

.kyc-text {
  font-size: 1rem;
  line-height: 1.25;
  color: #858997;

  @include media-breakpoint-down(md) {
    font-size: .75rem;
    margin-bottom: 0;
  }
}

.coins {
  width: 178px;
  height: 434px;
}

.coins-mobile {
  height: 168px;
  width: 439px;

  @include media-breakpoint-down(sm) {
    width: 266px;
    height: 117px;
  }
}

.coins-mobile-lg {
  @include media-breakpoint-down(lg) {
    width: 396px;
    height: 156px;
  }
}

.banner-wrap {
  width: 100%;

  @include media-breakpoint-up(md) {
    width: auto;
  }
}

.section-text-wrap {
  margin-left: 0px;

  @include media-breakpoint-down(lg) {
    margin-left: 0;
  }
}

.musthead__bottom-app-row {
  margin-top: 110px;
}

.section-physical-cards {
  @include media-breakpoint-down(lg) {
    padding-top: 250px;
    padding-bottom: 250px;
  }

  @include media-breakpoint-down(sm) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
</style>
