<template>
  <section class="team-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 v-html="$t('team.title')" class="section-title team-title"></h2>
        </div>
      </div>
      <div class="row justify-content-center justify-content-md-between team-row">
        <template v-for="person in members">
          <div :key="person.name" class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
            <team-member :person="person" @member="invokePopup($event)" />
          </div>
        </template>
      </div>
    </div>

    <div class="container pb-5">
      <div class="row">
        <div class="col-12">
          <h2 v-html="$t('team.advisors')" class="section-title team-title"></h2>
        </div>
      </div>
      <div class="row team-row">
        <template v-for="advisor in advisors">
          <div :key="advisor.name" class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
            <team-member :person="advisor" @member="invokePopup($event)" />
          </div>
        </template>
      </div>
    </div>

    <transition appear name="fade">
      <div v-if="showPopup" class="popup">
        <button
          type="button"
          class="popup__btn-close"
          @click="togglePopup"
        >
          <svg class="popup__close-icon">
            <use xlink:href="#close-popup-icon"></use>
          </svg>
        </button>
        <div class="popup-wrap">
          <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-md-center">
              <div class="col-12 col-lg-8">
                <div class="row no-gutters align-items-center">
                  <div class="col-12 col-lg-6">
                    <div class="d-flex flex-column align-items-center mt-5 mt-md-0 pt-4 pt-md-0">
                      <img
                        :src="team[memberToShow].photo.x1"
                        :srcset="`${team[memberToShow].photo.x2} 2x,
                        ${team[memberToShow].photo.x3} 3x`"
                        alt=""
                      >
                      <div class="d-none d-md-flex mt-5">
                        <svg
                          class="popup__arrow"
                          style="transform: rotate(180deg)"
                          @click="selectTeamMember(-1)"
                        >
                          <use xlink:href="#right-arrow"></use>
                        </svg>
                        <svg
                          class="popup__arrow green"
                          @click="selectTeamMember(1)"
                        >
                          <use xlink:href="#right-arrow"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <p class="popup__person-name">{{ team[memberToShow].name }}</p>
                    <p class="popup__person-role">{{ team[memberToShow].role }}</p>
                    <ul class="popup__list">
                      <template v-for="(item, index) in team[memberToShow].list">
                        <li :key="index" class="popup__list-item">
                          <p class="popup__list-text">{{ item }}</p>
                        </li>
                      </template>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import teamMember from '@/components/blocks/teamMember';

import './ceo.jpg';
import './right-arrow.svg';

export default {
  name: 'team-page',
  data() {
    return {
      showPopup: false,
      memberToShow: 0,
    };
  },
  components: {
    teamMember,
  },
  methods: {
    invokePopup(name) {
      this.memberToShow = this.team.findIndex(el => el.name === name);
      this.togglePopup();
    },
    togglePopup() {
      this.showPopup = !this.showPopup;

      document.documentElement.classList.toggle('overflow-hidden');
    },
    selectTeamMember(direction) {
      if (this.memberToShow === 0 && direction < 0) {
        this.memberToShow = this.team.length - 1;
        return false;
      }

      if (this.memberToShow === this.team.length - 1 && direction > 0) {
        this.memberToShow = 0;
        return false;
      }

      this.memberToShow += direction;

      window.getSelection().removeAllRanges();

      return false;
    },
  },
  computed: {
    team() {
      return [
        {
          name: this.$t('team.members.iliaBeniaminov.name'),
          role: this.$t('team.members.iliaBeniaminov.role'),
          photo: {
            x1: require('./ceo.jpg'), // eslint-disable-line
            x2: require('./ceo@2x.jpg'), // eslint-disable-line
            x3: require('./ceo@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.iliaBeniaminov.list[0]'),
            this.$t('team.members.iliaBeniaminov.list[1]'),
            this.$t('team.members.iliaBeniaminov.list[2]'),
            this.$t('team.members.iliaBeniaminov.list[3]'),
          ],
          linkedin: 'https://www.linkedin.com/in/iliyabiniaminov/',
          facebook: 'https://www.facebook.com/iliya.biniaminov1',
        },
        {
          name: this.$t('team.members.alexMikh.name'),
          role: this.$t('team.members.alexMikh.role'),
          photo: {
            x1: require('./cvo.jpg'), // eslint-disable-line
            x2: require('./cvo@2x.jpg'), // eslint-disable-line
            x3: require('./cvo@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.alexMikh.list[0]'),
            this.$t('team.members.alexMikh.list[1]'),
            this.$t('team.members.alexMikh.list[2]'),
            this.$t('team.members.alexMikh.list[3]'),
            this.$t('team.members.alexMikh.list[4]'),
            this.$t('team.members.alexMikh.list[5]'),
          ],
          linkedin: 'https://www.linkedin.com/in/alexmihk/',
          facebook: 'https://www.facebook.com/alexey.mikhantev',
        },
        {
          name: this.$t('team.members.georgeGus.name'),
          role: this.$t('team.members.georgeGus.role'),
          photo: {
            x1: require('./cmo.jpg'), // eslint-disable-line
            x2: require('./cmo@2x.jpg'), // eslint-disable-line
            x3: require('./cmo@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.georgeGus.list[0]'),
            this.$t('team.members.georgeGus.list[1]'),
            this.$t('team.members.georgeGus.list[2]'),
            this.$t('team.members.georgeGus.list[3]'),
          ],
          linkedin: 'https://www.linkedin.com/in/georgegus/',
          facebook: 'https://www.facebook.com/georgegus01',
        },
        {
          name: this.$t('team.members.zakariaMekreloufi.name'),
          role: this.$t('team.members.zakariaMekreloufi.role'),
          photo: {
            x1: require('./zakaria.jpg'), // eslint-disable-line
            x2: require('./zakaria@2x.jpg'), // eslint-disable-line
            x3: require('./zakaria@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.zakariaMekreloufi.list[0]'),
            this.$t('team.members.zakariaMekreloufi.list[1]'),
          ],
          linkedin: 'https://www.linkedin.com/in/zakaria-mekreloufi-731b61158/',
          facebook: '',
        },
        {
          name: this.$t('team.members.andrewSkurlatov.name'),
          role: this.$t('team.members.andrewSkurlatov.role'),
          photo: {
            x1: require('./cto.jpg'), // eslint-disable-line
            x2: require('./cto@2x.jpg'), // eslint-disable-line
            x3: require('./cto@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.andrewSkurlatov.list[0]'),
            this.$t('team.members.andrewSkurlatov.list[1]'),
            this.$t('team.members.andrewSkurlatov.list[2]'),
            this.$t('team.members.andrewSkurlatov.list[3]'),
            this.$t('team.members.andrewSkurlatov.list[4]'),
          ],
          linkedin: 'https://www.linkedin.com/in/andrew-skurlatov/',
          facebook: '',
        },
        {
          name: this.$t('team.members.ivanPodtsebnev.name'),
          role: this.$t('team.members.ivanPodtsebnev.role'),
          photo: {
            x1: require('./devops.jpg'), // eslint-disable-line
            x2: require('./devops@2x.jpg'), // eslint-disable-line
            x3: require('./devops@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.ivanPodtsebnev.list[0]'),
            this.$t('team.members.ivanPodtsebnev.list[1]'),
            this.$t('team.members.ivanPodtsebnev.list[2]'),
          ],
          linkedin: '',
          facebook: '',
        },
        {
          name: this.$t('team.members.nikitaVelko.name'),
          role: this.$t('team.members.nikitaVelko.role'),
          photo: {
            x1: require('./frontend.jpg'), // eslint-disable-line
            x2: require('./frontend@2x.jpg'), // eslint-disable-line
            x3: require('./frontend@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.nikitaVelko.list[0]'),
            this.$t('team.members.nikitaVelko.list[1]'),
            this.$t('team.members.nikitaVelko.list[2]'),
            this.$t('team.members.nikitaVelko.list[3]'),
          ],
          linkedin: '',
          facebook: '',
        },
        {
          name: this.$t('team.members.alexPonomaryov.name'),
          role: this.$t('team.members.alexPonomaryov.role'),
          photo: {
            x1: require('./ios-dev.jpg'), // eslint-disable-line
            x2: require('./ios-dev@2x.jpg'), // eslint-disable-line
            x3: require('./ios-dev@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.alexPonomaryov.list[0]'),
            this.$t('team.members.alexPonomaryov.list[1]'),
            this.$t('team.members.alexPonomaryov.list[2]'),
          ],
          linkedin: '',
          facebook: '',
        },
        {
          name: this.$t('team.members.danielDanilkin.name'),
          role: this.$t('team.members.danielDanilkin.role'),
          photo: {
            x1: require('./backend.jpg'), // eslint-disable-line
            x2: require('./backend@2x.jpg'), // eslint-disable-line
            x3: require('./backend@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.danielDanilkin.list[0]'),
            this.$t('team.members.danielDanilkin.list[1]'),
            this.$t('team.members.danielDanilkin.list[2]'),
            this.$t('team.members.danielDanilkin.list[3]'),
          ],
          linkedin: '',
          facebook: '',
        },
        {
          name: this.$t('team.members.dzhavidKhalilov.name'),
          role: this.$t('team.members.dzhavidKhalilov.role'),
          photo: {
            x1: require('./android-dev.jpg'), // eslint-disable-line
            x2: require('./android-dev@2x.jpg'), // eslint-disable-line
            x3: require('./android-dev@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.dzhavidKhalilov.list[0]'),
            this.$t('team.members.dzhavidKhalilov.list[1]'),
            this.$t('team.members.dzhavidKhalilov.list[2]'),
            this.$t('team.members.dzhavidKhalilov.list[3]'),
          ],
          linkedin: '',
          facebook: '',
        },
        {
          name: this.$t('team.members.dzeraGazdanova.name'),
          role: this.$t('team.members.dzeraGazdanova.role'),
          photo: {
            x1: require('./dzera.jpg'), // eslint-disable-line
            x2: require('./dzera@2x.jpg'), // eslint-disable-line
            x3: require('./dzera@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.dzeraGazdanova.list[0]'),
            this.$t('team.members.dzeraGazdanova.list[1]'),
            this.$t('team.members.dzeraGazdanova.list[2]'),
            this.$t('team.members.dzeraGazdanova.list[3]'),
            this.$t('team.members.dzeraGazdanova.list[4]'),
          ],
          linkedin: '',
          facebook: '',
        },
        {
          name: this.$t('team.members.alinaBelova.name'),
          role: this.$t('team.members.alinaBelova.role'),
          photo: {
            x1: require('./alina.jpg'), // eslint-disable-line
            x2: require('./alina@2x.jpg'), // eslint-disable-line
            x3: require('./alina@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.alinaBelova.list[0]'),
            this.$t('team.members.alinaBelova.list[1]'),
            this.$t('team.members.alinaBelova.list[2]'),
            this.$t('team.members.alinaBelova.list[3]'),
            this.$t('team.members.alinaBelova.list[4]'),
          ],
          linkedin: '',
          facebook: '',
        },
        {
          name: this.$t('team.members.paulAverkiev.name'),
          role: this.$t('team.members.paulAverkiev.role'),
          photo: {
            x1: require('./paul-averkiev.jpg'), // eslint-disable-line
            x2: require('./paul-averkiev@2x.jpg'), // eslint-disable-line
            x3: require('./paul-averkiev@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.paulAverkiev.list[0]'),
            this.$t('team.members.paulAverkiev.list[1]'),
            this.$t('team.members.paulAverkiev.list[2]'),
            this.$t('team.members.paulAverkiev.list[3]'),
            this.$t('team.members.paulAverkiev.list[4]'),
            this.$t('team.members.paulAverkiev.list[5]'),
          ],
          linkedin: 'https://www.linkedin.com/in/paulaverkiev/',
          facebook: '',
        },
        {
          name: this.$t('team.members.kamranKhan.name'),
          role: this.$t('team.members.kamranKhan.role'),
          photo: {
            x1: require('./kamran-khan.jpg'), // eslint-disable-line
            x2: require('./kamran-khan@2x.jpg'), // eslint-disable-line
            x3: require('./kamran-khan@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.kamranKhan.list[0]'),
            this.$t('team.members.kamranKhan.list[1]'),
            this.$t('team.members.kamranKhan.list[2]'),
            this.$t('team.members.kamranKhan.list[3]'),
            this.$t('team.members.kamranKhan.list[4]'),
            this.$t('team.members.kamranKhan.list[5]'),
          ],
          linkedin: 'https://www.linkedin.com/in/kamran-khan-778b3413/',
          facebook: '',
        },
        {
          name: this.$t('team.members.namigMamedov.name'),
          role: this.$t('team.members.namigMamedov.role'),
          photo: {
            x1: require('./namiq-mamedov.jpg'), // eslint-disable-line
            x2: require('./namiq-mamedov@2x.jpg'), // eslint-disable-line
            x3: require('./namiq-mamedov@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.namigMamedov.list[0]'),
            this.$t('team.members.namigMamedov.list[1]'),
            this.$t('team.members.namigMamedov.list[2]'),
            this.$t('team.members.namigMamedov.list[3]'),
          ],
          linkedin: '',
          facebook: '',
        },
        {
          name: this.$t('team.members.andrewKoch.name'),
          role: this.$t('team.members.andrewKoch.role'),
          photo: {
            x1: require('./andrew-koch.jpg'), // eslint-disable-line
            x2: require('./andrew-koch@2x.jpg'), // eslint-disable-line
            x3: require('./andrew-koch@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.andrewKoch.list[0]'),
            this.$t('team.members.andrewKoch.list[1]'),
            this.$t('team.members.andrewKoch.list[2]'),
            this.$t('team.members.andrewKoch.list[3]'),
          ],
          linkedin: 'https://sg.linkedin.com/in/andrewkohmw',
          facebook: '',
        },
        {
          name: this.$t('team.members.timurMarshani.name'),
          role: this.$t('team.members.timurMarshani.role'),
          photo: {
            x1: require('./timur-marshani.jpg'), // eslint-disable-line
            x2: require('./timur-marshani@2x.jpg'), // eslint-disable-line
            x3: require('./timur-marshani@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.timurMarshani.list[0]'),
            this.$t('team.members.timurMarshani.list[1]'),
            this.$t('team.members.timurMarshani.list[2]'),
            this.$t('team.members.timurMarshani.list[3]'),
          ],
          linkedin: 'https://www.linkedin.com/in/timur-marshani-447a9883/',
          facebook: '',
        },
        {
          name: this.$t('team.members.antonyScuderi.name'),
          role: this.$t('team.members.antonyScuderi.role'),
          photo: {
            x1: require('./antony-scuderi.jpg'), // eslint-disable-line
            x2: require('./antony-scuderi@2x.jpg'), // eslint-disable-line
            x3: require('./antony-scuderi@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.antonyScuderi.list[0]'),
            this.$t('team.members.antonyScuderi.list[1]'),
            this.$t('team.members.antonyScuderi.list[2]'),
            this.$t('team.members.antonyScuderi.list[3]'),
            this.$t('team.members.antonyScuderi.list[4]'),
          ],
          linkedin: 'https://www.linkedin.com/in/anthony-scuderi/',
          facebook: '',
        },
        {
          name: this.$t('team.members.jaberAlMarzoqi.name'),
          role: this.$t('team.members.jaberAlMarzoqi.role'),
          photo: {
            x1: require('./jaber-al-marzoqi.jpg'), // eslint-disable-line
            x2: require('./jaber-al-marzoqi@2x.jpg'), // eslint-disable-line
            x3: require('./jaber-al-marzoqi@3x.jpg'), // eslint-disable-line
          },
          list: [
            this.$t('team.members.antonyScuderi.list[0]'),
            this.$t('team.members.antonyScuderi.list[1]'),
            this.$t('team.members.antonyScuderi.list[2]'),
            this.$t('team.members.antonyScuderi.list[3]'),
          ],
          linkedin: '',
          facebook: '',
        },
      ];
    },
    members() {
      return this.team.slice(0, 13);
    },
    advisors() {
      return this.team.slice(13);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";

.team-row {
  margin-top: 50px;
  margin-bottom: 50px;
}

.team-title {
  margin-top: 80px;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(11, 14, 67, 0.95);
}

.popup-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  user-select: none;

  @include media-breakpoint-down(md) {
    align-items: initial;
    justify-content: initial;
  }
}

.popup__btn-close {
  position: absolute;
  top: 55px;
  right: 75px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 9;

  @include media-breakpoint-down(md) {
    top: 20px;
    right: 10px;
  }
}

.popup__close-icon {
  width: 24px;
  height: 24px;
}

.popup__person-name {
  font-size: 1.3125rem;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 0.7px;
  color: #ffffff;
  margin-bottom: 0;

  @include media-breakpoint-down(md) {
    text-align: center;
    margin-top: 32px;
  }
}

.popup__person-role {
  font-size: .875rem;
  line-height: 1;
  letter-spacing: 0.5px;
  color: $sky-blue;
  margin-top: 6px;
  margin-bottom: 0;

  @include media-breakpoint-down(md) {
    text-align: center;
  }
}

.popup__list {
}

.popup__list-item {
}

.popup__list-text {
  font-size: 1rem;
  line-height: 1.56;
  letter-spacing: 0.6px;
  color: #ffffff;
}

.popup__list {
  margin-top: 18px;
  padding-left: 15px;
}

.popup__arrow {
  fill: white;
  width: 55px;
  height: 55px;
  cursor: pointer;

  &:last-child {
    margin-left: 28px;
  }
}
</style>
