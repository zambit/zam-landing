<template>
  <div id="main">
    <section class="musthead">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-12 col-lg-6">
            <div class="d-flex justify-content-center flex-column">
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
              <form class="d-none d-md-flex mt-5" @submit.prevent="submitForm">
                <phone-input
                  :phone="formData.phone"
                  :guess-country-on-created="true"
                  required
                  @value="formData.phone = $event"
                  @country="formData.country = $event"
                />
                <button type="submit" class="btn musthead__btn">Go</button>
              </form>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="d-flex align-items-center">
              <img
                class="musthead__pic"
                src="./main.png"
                srcset="./main@2x.png 2x, ./main@3x.png 3x"
                alt=""
              >
              <div class="d-none d-md-flex flex-column">
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
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="section section-kyc">
      <div class="container-fluid">
        <div class="row align-items-center h-100">
          <div class="col-12 col-lg-4 offset-lg-1 order-1 order-md-0">
            <div class="d-flex align-items-center flex-column flex-md-row">
              <div
                class="d-flex w-100
              flex-md-column order-1 order-md-0
              justify-content-center justify-content-md-start"
              >
                <svg class="banner-saltedge">
                  <use xlink:href="#banner-saltedge"></use>
                </svg>
                <svg class="banner-jumio">
                  <use xlink:href="#banner-jumio"></use>
                </svg>
              </div>
              <img
                class="phone-pic"
                src="./kyc.png"
                srcset="./kyc@2x.png 2x, ./kyc@3x.png 3x"
                alt=""
              />
            </div>
          </div>
          <div class="col-12 col-lg-3 offset-lg-2">
            <h2 class="title">Identity verification in 2 minutes</h2>
            <p class="section-text">No need to fill in numerous forms and attach photos</p>
            <div class="mb-3 mb-md-4">
              <span class="kyc-title">3 minutes</span>
              <p class="kyc-text">Passport scanning and face scanning with your smartphone
                camera</p>
            </div>
            <div>
              <span class="kyc-title">1 minute</span>
              <p class="kyc-text">Identity verification and AML via your bank account in one of our
                2500 partner banks worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="section section-virtual-cards">
      <div class="container-fluid">
        <div class="row align-items-center h-100">
          <div class="col-12 col-lg-4 offset-lg-1">
            <div class="d-flex justify-content-center">
              <div>
                <h2 class="title">Instant access to your virtual card</h2>
                <p class="section-text">Start using the service just after the registration.
                  Do online shopping and NFC payments with a virtual card.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 offset-lg-2">
            <div class="d-flex flex-column flex-md-row align-items-center">
              <img
                class="phone-pic"
                src="./face-id.png"
                srcset="./face-id@2x.png 2x, ./face-id@3x.png 3x"
                alt=""
              />
              <div class="d-flex flex-md-column">
                <svg class="banner-google-pay">
                  <use xlink:href="#banner-google-pay"></use>
                </svg>
                <svg class="banner-apple-pay">
                  <use xlink:href="#banner-apple-pay"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="section section-physical-cards">
      <div class="container-fluid">
        <div class="row align-items-center h-100">
          <div class="col-12 col-lg-4 offset-lg-1 order-1 order-md-0">
            <div class="position-relative text-center text-md-right" style="z-index: 0;">
              <img
                class="phone-pic d-inline-block"
                src="./credit-card.png"
                srcset="./credit-card@2x.png 2x, ./credit-card@3x.png 3x"
                alt=""
              />
              <img
                class="card-pic"
                src="./zam-card.png"
                srcset="./zam-card@2x.png 2x, ./zam-card@3x.png 3x"
                alt=""
              />
            </div>
          </div>
          <div class="col-12 col-lg-3 offset-lg-2">
            <h2 class="title">Even more possibilities with a physical card</h2>
            <p class="section-text">Multicurrency cash is always with you. Withdraw money at
              any ATM worldwide with a minimal fee. We are not earning
              on you, just covering the costs.</p>
          </div>
        </div>
      </div>
    </section>


    <section class="section section-deposit-money">
      <div class="container-fluid">
        <div class="row align-items-center h-100">
          <div class="col-12 col-lg-4 offset-lg-1">
            <h2 class="title">Replenish your account in any convenient way with minimal
              commissions</h2>
            <p class="section-text">Replenish your zam.account with any bank card with 2% commission
              only. We’d like to make it free, but Visa, MasterCard and your card
              issuing bank have their conditions.</p>
          </div>
          <div class="col-12 col-lg-4 offset-lg-2">
            <div class="d-flex flex-column flex-md-row align-items-center">
              <img
                class="phone-pic"
                src="./deposit.png"
                srcset="./deposit@2x.png 2x, ./deposit@3x.png 3x"
                alt=""
              />
              <div
                class="d-flex flex-md-column justify-content-center
              justify-content-md-start"
              >
                <svg class="banner-visa">
                  <use xlink:href="#banner-visa"></use>
                </svg>
                <svg class="banner-mastercard">
                  <use xlink:href="#banner-mastercard"></use>
                </svg>
                <svg class="banner-union-pay">
                  <use xlink:href="#banner-union-pay"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="section section-exchange-fiat">
      <div class="container-fluid">
        <div class="row align-items-center h-100">
          <div class="col-12 col-lg-4 offset-lg-1 order-1 order-md-0">
            <div class="d-flex align-items-center flex-column flex-md-row">
              <div
                class="d-flex flex-md-column
              order-1 order-md-0 justify-content-center justify-content-md-start"
              >
                <img
                  src="./banner-dme.png"
                  class="banner-dme"
                  srcset="./banner-dme@2x.png 2x, ./banner-dme@3x.png 3x"
                  alt=""
                >
                <img
                  src="./banner-stock-exchange.png"
                  class="banner-stock-exchange"
                  srcset="./banner-stock-exchange@2x.png 2x, ./banner-stock-exchange@3x.png 3x"
                  alt=""
                >
                <img
                  src="./banner-sgx.png"
                  class="banner-sgx"
                  srcset="./banner-sgx@2x.png 2x, ./banner-sgx@3x.png 3x"
                  alt=""
                >
              </div>
              <img
                class="phone-pic"
                src="./exchange.png"
                srcset="./exchange@2x.png 2x, ./exchange@3x.png 3x"
                alt=""
              />
            </div>
          </div>
          <div class="col-12 col-lg-4 offset-lg-2">
            <h2 class="title">Exchange fiat and digital money at genuine exchange rates</h2>
            <p class="section-text">Transparent exchange rates for any currency. We provide exchange
              services at average market rates and with fixed withdrawal fee (0.5%).
              Traditional banks exchange rates are 2-10% higher.</p>
          </div>
        </div>
      </div>
    </section>


    <section class="section section-send-money">
      <div class="container-fluid">
        <div class="row align-items-center h-100">
          <div class="col-12 col-lg-4 offset-lg-1">
            <h2 class="title">Instant remittances via a telephone number</h2>
            <p class="section-text">Send money to friends and relatives by a phone number only.
              Even if they don’t have Zam.account, they will receive payment
              after a simple authentication.</p>
          </div>
          <div class="col-12 col-lg-4 offset-lg-2">
            <div class="d-flex flex-column flex-md-row align-items-center">
              <img
                class="phone-pic"
                src="./send.png"
                srcset="./send@2x.png 2x, ./send@3x.png 3x"
                alt=""
              />
              <div class="d-flex flex-md-column">
                <svg class="icon icon-dollar">
                  <use xlink:href="#icon-dollar"></use>
                </svg>
                <svg class="icon icon-bitcoin">
                  <use xlink:href="#icon-bitcoin"></use>
                </svg>
                <svg class="icon icon-yen">
                  <use xlink:href="#icon-yen"></use>
                </svg>
                <svg class="icon icon-zam">
                  <use xlink:href="#icon-zam"></use>
                </svg>
                <svg class="icon icon-euro">
                  <use xlink:href="#icon-euro"></use>
                </svg>
                <svg class="icon icon-ethereum">
                  <use xlink:href="#icon-ethereum"></use>
                </svg>
              </div>
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
import './banner-mastercard.svg';
import './banner-union-pay.svg';
import './icon-dollar.svg';
import './icon-bitcoin.svg';
import './icon-yen.svg';
import './icon-zam.svg';
import './icon-euro.svg';
import './icon-ethereum.svg';

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
          day: '26',
          tag: 'News',
          month: 'Oct',
          title: 'Zamzam welcomes Samy Naceri to the team',
          author: 'zamzam',
          url: 'https://medium.com/@Zamzamofficial/zamzam-welcomes-samy-naceri-to-the-team-64960c6b0c05',
          thumb: {
            x1: require('./news-samy-naceri.jpg'),
            x2: require('./news-samy-naceri@2x.jpg'),
            x3: require('./news-samy-naceri@3x.jpg'),
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
    padding-top: 0;
  }
}

.musthead__title {
  font-size: 5.625rem;
  font-weight: bold;
  line-height: 1;
  letter-spacing: -3px;
  color: $sky-blue;

  @include media-breakpoint-down(md) {
    font-size: 3.625rem;
    line-height: 1;
  }
}

.musthead__subtitle {
  font-size: 1.875rem;
  color: #2a3271;

  margin-top: $spacer;
  margin-bottom: 0;

  @include media-breakpoint-down(md) {
    font-size: 0.875rem;
    margin-top: 0;
  }
}

.musthead__desc {
  font-size: 1rem;
  line-height: 1.25;
  color: #858997;
  margin-top: $spacer * 3;

  @include media-breakpoint-down(md) {
    margin-top: $spacer * 1.5;
  }
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
  box-shadow: 0 3px 10px 0 #19533b29;
  background-color: #7ad86b;

  margin-left: $spacer * 2;

  &:hover {
    box-shadow: none;
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
    fill: #b1b1b1;
  }
}

.musthead__pic {
  height: 633px;

  @include media-breakpoint-down(md) {
    height: auto;
    width: 100%;

    margin-top: $spacer * 4;
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
  font-weight: 500;
  color: #ffffff;
  border-radius: 70px;
  box-shadow: 0 3px 15px 0 #19533b29;
  background-color: #7ad86b;
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

.section-news {
  margin-top: 100px;
  margin-bottom: 230px;

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

.section {
  padding: 50px 0;

  & .container-fluid {
    height: 100vh;

    @include media-breakpoint-down(md) {
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

  @include media-breakpoint-down(md) {
    font-size: 1.87500rem;
    line-height: 1.33;
    margin-bottom: $spacer * 1.5;
  }
}

.section-text {
  font-size: 1.125rem;
  line-height: 1.56;
  color: #858997;

  @include media-breakpoint-down(md) {
    font-size: 1rem;
  }
}

.banner-app-store,
.banner-google-play {
  width: 216px;
  height: 77px;
  object-fit: contain;
}

.banner-saltedge,
.banner-jumio,
.banner-google-pay,
.banner-apple-pay,
.banner-visa,
.banner-mastercard,
.banner-union-pay,
.banner-dme,
.banner-dme,
.banner-stock-exchange,
.banner-sgx {
  width: 155px;
  height: 80px;
  object-fit: contain;

  @include media-breakpoint-down(md) {
    width: 100px;
    height: 45px;
  }
}

.phone-pic {
  height: 570px;

  @include media-breakpoint-down(md) {
    height: auto;
    width: 100%;
  }
}

.icon {
  width: 52px;
  height: 52px;

  @include media-breakpoint-down(md) {
    width: 40px;
    height: 40px;
  }
}

.icon-dollar {
  position: relative;
  left: 25px;

  @include media-breakpoint-down(md) {
    left: initial;
    top: 15px;
  }
}

.icon-bitcoin {
  @include media-breakpoint-down(md) {
    position: relative;
    top: 35px;
  }
}

.icon-yen,
.icon-euro {
  position: relative;
  left: 45px;

  @include media-breakpoint-down(md) {
    left: initial;
  }
}

.icon-zam {
  @include media-breakpoint-down(md) {
    position: relative;
    top: 35px;
  }
}

.icon-ethereum {
  position: relative;
  left: 15px;

  @include media-breakpoint-down(md) {
    left: initial;
    top: 25px;
  }
}

.card-pic {
  position: absolute;
  height: 60%;
  top: 20%;
  right: 15%;
  z-index: -1;
}

.get-app-link {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38;
  color: #ffffff;

  padding: 16px 32px;

  border-radius: 30px;
  box-shadow: 0 3px 10px 0 #19533b29;
  background-color: #7ad86b;
}

.kyc-title {
  font-size: .75rem;
  font-weight: bold;
  line-height: 1.67;
  color: $sky-blue;
}

.kyc-text {
  font-size: 1rem;
  line-height: 1.25;
  color: #858997;

  @include media-breakpoint-down(md) {
    font-size: .75rem;
  }
}
</style>
