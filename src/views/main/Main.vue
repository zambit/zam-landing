<template>
  <div id="main">


    <section class="musthead">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-12 col-lg-6">
            <h1 class="musthead__title"><span class="dark-blue">The fair</span> blockchain bank</h1>
            <p class="musthead__desc">
              Take part in the open testing of cryptocurrency transfers by phone number and earn
              additional ZAM tokens</p>
            <form class="d-none d-md-flex mt-5" @submit.prevent="">
              <phone-input
                :phone="phone"
                :guess-country-on-created="true"
                required
                @value="phone = $event"
              />
              <button type="submit" class="btn musthead__btn">Ok</button>
            </form>
            <div class="d-flex d-md-none align-items-center">
              <router-link to="" class="product__button m-0">
                Get the app
              </router-link>
              <svg class="musthead__app-icon ml-5">
                <use xlink:href="#apple-logo"></use>
              </svg>
              <svg class="musthead__app-icon">
                <use xlink:href="#android-logo"></use>
              </svg>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <svg class="d-none d-md-block musthead__pic">
              <use xlink:href="#man-on-chair"></use>
            </svg>
            <img
              src="./main-phone-mobile.png"
              srcset="./main-phone-mobile@2x.png 2x, ./main-phone-mobile@3x.png 3x"
              alt=""
              class="d-md-none mt-5"
              style="max-width: 100%; height: auto;"
            >
          </div>
        </div>
        <div class="row apps-row d-none d-md-flex">
          <div class="col-auto">
            <svg class="musthead__app-icon">
              <use xlink:href="#apple-logo"></use>
            </svg>
            <svg class="musthead__app-icon">
              <use xlink:href="#android-logo"></use>
            </svg>
          </div>
        </div>
      </div>
    </section>


    <section class="product">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-7">
            <h2 class="product__title text-md-center">Why does the world need blockchain banks?</h2>
          </div>
          <div class="col-12 col-md-8">
            <p class="feature-desc mt-5 text-md-center">Zamzam mission
              is to speed up the process of the transition from
              a traditional monetary system to a fully digital economy in order for banks and
              financial institutions all over the world to become open, fair and efficient through
              the implementation of blockchain and decentralized systems.</p>
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
              <h6 class="feature-title">Openness</h6>
              <p class="feature-desc">Transparency of all operations in blockchain. Real-time
                publication of the Zamzam bank’s detailed financial activities. Open results of bank
                audit. You have never worked with such an open banking system!</p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="row no-gutters">
              <div class="col-12">
                <img
                  src="./features-pic.jpg"
                  srcset="./features-pic@2x.jpg 2x, ./features-pic@3x.jpg 3x"
                  alt=""
                >
              </div>
              <div class="col-12 col-lg-6">
                <h6 class="feature-title">Fairness</h6>
                <p class="feature-desc">Provide users with a choice between centralized and
                  decentralized assets storage. Future is for hybrid systems, which give freedom of
                  choice.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <div class="feature-right">
              <h6 class="feature-title">Efficiency</h6>
              <p class="feature-desc">Reduce costs by circumventing the chain of intermediaries and
                abandoning obsolete methods of managing financial organizations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="product">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5">
            <div class="product__name">zam wallet</div>
            <h2 class="product__title">Cryptocurrency wallet, as it
              should be</h2>
            <p class="product__desc">Stop wasting your attention on dozens of financial
              applications with severely limited
              functionalities. The zam.wallet erases the boundaries between traditional money and
              cryptocurrencies while remaining more efficient than the market by 2-3 times.</p>
            <router-link to="" class="d-none d-md-flex product__button">
              Try it now
            </router-link>
          </div>
          <div class="col-12 col-lg-6">
            <svg class="product__zam-wallet-pic">
              <use xlink:href="#zam-wallet-pic"></use>
            </svg>
            <router-link to="" class="d-md-none product__button mt-4">
              Read more
            </router-link>
          </div>
        </div>
      </div>
    </section>


    <section class="product">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 order-1 order-md-0">
            <svg class="product__zam-merchant-pic">
              <use xlink:href="#zam-merchant-pic"></use>
            </svg>
            <router-link to="" class="d-md-none product__button mt-4">
              Read more
            </router-link>
          </div>
          <div class="col-12 col-lg-6 order-0 order-md-1">
            <div class="product__name">Zam Merchant</div>
            <h2 class="product__title">Effortless financial management for
              your business!</h2>
            <p class="product__desc">Doing business has never been so easy, intuitive & automated.
              While developing the
              zam.merchant, we took into account the needs of thousands of businessmеn from all over
              the world.</p>
            <router-link to="" class="d-none d-md-flex product__button">
              Read more
            </router-link>
          </div>
        </div>
      </div>
    </section>


    <section class="product">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5">
            <div class="product__name">Zam Chain</div>
            <h2 class="product__title">Fast financial blockchain based on Stellar fork</h2>
            <p class="product__desc">Doing business has never been so easy, intuitive & automated.
              While developing the
              zam.merchant, we took into account the needs of thousands of businessmеn from all over
              the world.</p>
            <router-link to="" class="d-none d-md-flex product__button">
              Read more
            </router-link>
          </div>
          <div class="col-12 col-lg-7">
            <svg class="product__zam-chain-pic">
              <use xlink:href="#zam-chain-pic"></use>
            </svg>
            <router-link to="" class="d-md-none product__button mt-4">
              Read more
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="section-news">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-title"><span class="dark-blue">Our</span> news</h2>
          </div>
        </div>
        <div class="row news-row">
          <template v-for="(n, index) in 4">
            <div
              :key="index"
              style="margin-top: 30px"
              class="col-12 col-sm-6 col-lg-4"
            >
              <router-link to="">
                <news-card
                  :news="news[index]"
                  class="h-100"
                />
              </router-link>
            </div>
          </template>
          <div
            class="col-12 col-sm-6 col-lg-8"
            style="margin-top: 30px;"
          >
            <router-link to="">
              <news-card
                :news="news[0]"
                class="h-100"
              />
            </router-link>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto">
            <router-link to="" class="news-btn">See more content</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="table__section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-title"><span class="dark-blue">Pricing</span></h2>
          </div>
        </div>
        <div class="row mt-5 d-none d-md-flex">
          <div class="col-4"></div>
          <div class="col-4">
            <p class="text-center table__heading">Free</p>
          </div>
          <div class="col-4">
            <p class="text-center table__heading">Premium</p>
          </div>
        </div>

        <div class="row justify-content-center d-md-none no-gutters mt-4">
          <div class="col-auto text-center">
            <button
              type="button"
              :class="['table__btn-switch', { 'table__btn-switch--active' : showTableData === 'free'
               }]"
              @click="showTableData = 'free'"
            >Free</button>
          </div>
          <div class="col-auto text-center ml-4">
            <button
              type="button"
              :class="['table__btn-switch', { 'table__btn-switch--active' : showTableData ===
              'premium' }]"
              @click="showTableData = 'premium'"
            >Premium</button>
          </div>
        </div>

        <div class="row d-md-none mt-4">
          <template v-for="row in tableData">
            <div :key="row.title" class="col-12 table__row">
              <div class="row h-100 align-items-center">
                <div class="col-8">
                  <span class="table__title-m">{{ row.title }}</span>
                </div>
                <div class="col-4">
                  <span class="table__free-m">{{ row[showTableData] }}</span>
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
                    <span class="table__free">{{ row.free }}</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="d-flex h-100 justify-content-center">
                    <span class="table__premium">{{ row.premium }}</span>
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
        <div class="row">
          <div class="col-12 col-lg-6">
            <h2 class="product__title">
              Test zam wallet and
              <span class="sky-blue">get 1000 ZAM</span> as a gift for
              premium payment</h2>
            <p class="product__desc">Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s,</p>
            <form class="d-none d-md-flex mt-5" @submit.prevent="">
              <phone-input
                :phone="phone"
                :guess-country-on-created="true"
                required
                @value="phone = $event"
              />
              <button type="submit" class="btn musthead__btn">Ok</button>
            </form>
            <div class="d-flex d-md-none align-items-center">
              <router-link to="" class="product__button m-0">
                Get the app
              </router-link>
              <svg class="musthead__app-icon ml-5">
                <use xlink:href="#apple-logo"></use>
              </svg>
              <svg class="musthead__app-icon">
                <use xlink:href="#android-logo"></use>
              </svg>
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
import newsCard from '@/components/blocks/newsCard';
import phoneInput from '@/components/blocks/phoneInput';

import './android-logo.svg';
import './apple-logo.svg';
import './man-on-chair.svg';
import './zam-chain-pic.svg';
import './zam-wallet-pic.svg';
import './zam-merchant-pic.svg';

export default {
  name: 'main-page',
  data() {
    return {
      phone: '',
      showTableData: 'free',
      news: [
        {
          day: '28',
          tag: 'News',
          month: 'July',
          title: 'Why did we choose the Stellar blockchain?',
          author: 'Bruno Salmator',
          thumbnail: 'https://nerdist.com/wp-content/uploads/2017/07/Rick-and-Morty-NNTB.jpg',
        },
        {
          day: '28',
          tag: 'News',
          month: 'July',
          title: 'Why did we choose the Stellar blockchain?',
          author: 'Bruno Salmator',
          thumbnail: 'https://nerdist.com/wp-content/uploads/2017/07/Rick-and-Morty-NNTB.jpg',
        },
        {
          day: '28',
          tag: 'News',
          month: 'July',
          title: 'Why did we choose the Stellar blockchain?',
          author: 'Bruno Salmator',
          thumbnail: 'https://nerdist.com/wp-content/uploads/2017/07/Rick-and-Morty-NNTB.jpg',
        },
        {
          day: '28',
          tag: 'News',
          month: 'July',
          title: 'Why did we choose the Stellar blockchain?',
          author: 'Bruno Salmator',
          thumbnail: 'https://nerdist.com/wp-content/uploads/2017/07/Rick-and-Morty-NNTB.jpg',
        },
        {
          day: '28',
          tag: 'News',
          month: 'July',
          title: 'Why did we choose the Stellar blockchain?',
          author: 'Bruno Salmator',
          thumbnail: 'https://nerdist.com/wp-content/uploads/2017/07/Rick-and-Morty-NNTB.jpg',
        },
      ],
      tableData: [
        {
          title: 'Price',
          free: '$0 / 0 ZAM',
          premium: '$9 / 450 ZAM',
        },
        {
          title: 'Transfers of cryptocurrency by phone number',
          free: '0%',
          premium: '0%',
        },
        {
          title: 'Transfers within the bank ',
          free: '0%',
          premium: '0%',
        },
        {
          title: 'External transfer of cryptocurrency',
          free: '0.25%',
          premium: '0%',
        },
        {
          title: 'Purchase of cryptocurrency with Visa, MasterCard, UnionPay cards',
          free: '4%',
          premium: '3.5%',
        },
        {
          title: 'Immediate withdrawal of cryptocurrency',
          free: '2% + 1,15$',
          premium: '1% + 1,15$',
        },
        {
          title: 'Ability to bind 1 bank card for withdrawal',
          free: '1',
          premium: '5',
        },
        {
          title: 'Free SMS notifications of transactions per month',
          free: '25',
          premium: 'Unlimited',
        },
        {
          title: 'Limit per month for withdrawal to the card',
          free: '400 € / 400 $',
          premium: '1000 € / 1000 $',
        },
      ],
    };
  },
  components: {
    phoneInput,
    newsCard,
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
  }
}

.product__desc {
  font-size: 1rem;
  line-height: 1.56;
  color: $silver;
  margin-top: 20px;
}

.product__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
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
  padding-top: 145px;

  @include media-breakpoint-down(md) {
    padding-top: 30px;
  }
}

.musthead__title {
  font-size: 6.25rem;
  font-weight: bold;
  line-height: 0.85;
  letter-spacing: -3px;
  color: $sky-blue;
  margin-top: 32px;

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
  margin-bottom: 586px;
}

.musthead__app-icon {
  width: 30px;
  height: 35px;
  cursor: pointer;

  fill: #ECECEC;

  transition: fill .2s ease;

  &:last-child {
    margin-left: 30px;
  }

  &:hover {
    fill: #b1b1b1;
  }
}

.musthead__pic {
  width: 610px;
  height: 640px;
}

.product__zam-wallet-pic {
  width: 687px;
  height: 532px;

  @include media-breakpoint-down(md) {
    width: auto;
    height: 300px;
  }
}

.product__zam-merchant-pic {
  position: relative;
  left: -205px;
  width: 739px;
  height: 460px;

  @include media-breakpoint-down(md) {
    left: 0;
    width: auto;
    height: 230px;
  }
}

.product__zam-chain-pic {
  width: 647px;
  height: 481px;

  @include media-breakpoint-down(md) {
    width: auto;
    height: 290px;
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
