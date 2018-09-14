<template>
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="d-flex justify-content-center">
            <a href="" class="footer__btn-cta">
              <svg class="footer__btn-icon">
                <use xlink:href="#telegram-logo"></use>
              </svg>
              Join us on Telegram
            </a>
          </div>
        </div>
      </div>
      <div class="row justify-content-between footer__socials-row">
        <template v-for="item in socials">
          <div :key="item.name" class="col-auto">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">
              <div class="d-flex align-items-center footer__social">
                <svg class="footer__social-icon">
                  <use :xlink:href="item.icon"></use>
                </svg>
                <span class="footer__social-name ml-3">{{ item.name }}</span>
              </div>
            </a>
          </div>
        </template>
      </div>
      <div class="row justify-content-center footer__app-row">
        <div class="col-auto">
          <router-link to="">
            <svg class="footer__app-banner">
              <use xlink:href="#google-play-banner"></use>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-auto">
          <router-link to="">
            <svg class="footer__app-banner">
              <use xlink:href="#app-store-banner"></use>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="row justify-content-center footer__links-row">
        <div class="col-auto">
          <router-link to="" class="footer__text text-underline">Privacy Policy</router-link>
          <router-link to="" class="footer__text text-underline ml-3">
            Terms and Conditions
          </router-link>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-auto">
          <span>&copy; 2018. Zamzam LLC, All rights reserved</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import './facebook-square-logo.svg';
import './instagram-logo.svg';
import './medium-logo.svg';
import './telegram-logo.svg';
import './twitter-logo.svg';
import './app-store-banner.svg';
import './google-play-banner.svg';

export default {
  name: 'v-footer',
  data() {
    return {
      socials: [
        {
          name: 'Telegram',
          icon: '#telegram-logo',
          url: 'https://t.me/zamzambank',
        },
        {
          name: 'Twitter',
          icon: '#twitter-logo',
          url: 'https://twitter.com/zamzambank',
        },
        {
          name: 'Instagram',
          icon: '#instagram-logo',
          url: 'https://instagram.com/zamzam.io',
        },
        {
          name: 'Medium',
          icon: '#medium-logo',
          url: 'https://medium.com/@zamzamofficial',
        },
        {
          name: 'Facebook',
          icon: '#facebook-square-logo',
          url: 'https://www.facebook.com/zamzambank',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";

footer.footer {
  background-image: linear-gradient(to right, #0e1246, #283c94);
  color: white;

  padding: 95px 0 75px;
}

.footer__social {
  transition: opacity .2s ease;

  &:hover {
    opacity: .5;
  }
}

.footer__social-icon {
  width: 25px;
  height: 25px;
}

.footer__social-name {
  font-size: 1.3125rem;
  line-height: 1;
  letter-spacing: 0.5px;
  color: white;
}

.footer__social-count {
  font-size: 0.8125rem;
  line-height: 3.08;
  letter-spacing: 0.3px;
  color: $sky-blue;
}

.footer__app-banner {
  width: 185px;
  height: 50px;

  transition: opacity .2s ease;

  &:hover {
    opacity: .5;
  }
}

.footer__app-row {
  margin-top: 85px;
}

.footer__text {
  font-size: 1rem;
  line-height: 2.5;
  color: #ffffff;
}

.footer__links-row {
  margin-top: 65px;
}

.footer__btn-icon {
  width: 40px;
  height: 35px;

  margin-right: 30px;
}

.footer__btn-cta {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.3125rem;
  color: #ffffff;

  padding: 18px 32px;

  border-radius: 35px;
  border: solid 2px #ffffff;

  transition: background-color .2s ease;

  &:hover {
    background-color: #283C98;
  }
}

.footer__socials-row {
  margin-top: 94px;
}
</style>
