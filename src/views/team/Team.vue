<template>
  <section class="team-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section-title team-title">
            <span class="dark-blue">Our</span> team
          </h2>
        </div>
      </div>
      <div class="row justify-content-center justify-content-md-between team-row">
        <template v-for="person in team">
          <div :key="person.name" class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
            <team-member :person="person" @member="invokePopup($event)" />
          </div>
        </template>
      </div>
    </div>

    <transition appear name="fade">
      <div v-if="showPopup" class="popup">
        <button
          type="button"
          class="popup__btn-close"
          @click="showPopup = false"
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
      team: [
        {
          name: 'Iliya Biniaminov',
          role: 'CEO, Co-Founder',
          photo: {
            x1: require('./ceo.jpg'), // eslint-disable-line
            x2: require('./ceo@2x.jpg'), // eslint-disable-line
            x3: require('./ceo@3x.jpg'), // eslint-disable-line
          },
          list: [
            'Founder of MKG Real Estate & Investment, a leading brokerage company for asset management in the Middle East and North Africa with a head office in Dubai, UAE',
            'Has a CFA level 1 certificate and works closely with the government of Dubai, attracting investments in the stock and financial markets, as well as small and medium-sized businesses',
          ],
        },
        {
          name: 'Alex Mikh',
          role: 'CVO, Co-Founder',
          photo: {
            x1: require('./cvo.jpg'), // eslint-disable-line
            x2: require('./cvo@2x.jpg'), // eslint-disable-line
            x3: require('./cvo@3x.jpg'), // eslint-disable-line
          },
        },
        {
          name: 'George Gus',
          role: 'CMO, Co-Founder',
          photo: {
            x1: require('./cmo.jpg'), // eslint-disable-line
            x2: require('./cmo@2x.jpg'), // eslint-disable-line
            x3: require('./cmo@3x.jpg'), // eslint-disable-line
          },
        },
        {
          name: 'Zakaria Mekreloufi',
          role: 'CEO of the MENA region',
          photo: {
            x1: require('./zakaria.jpg'), // eslint-disable-line
            x2: require('./zakaria@2x.jpg'), // eslint-disable-line
            x3: require('./zakaria@3x.jpg'), // eslint-disable-line
          },
        },
        {
          name: 'Andrew Skurlatov',
          role: 'CTO',
          photo: {
            x1: require('./cto.jpg'), // eslint-disable-line
            x2: require('./cto@2x.jpg'), // eslint-disable-line
            x3: require('./cto@3x.jpg'), // eslint-disable-line
          },
        },
        {
          name: 'Ivan Podtsebnev',
          role: 'Head of DevOps & Security',
          photo: {
            x1: require('./devops.jpg'), // eslint-disable-line
            x2: require('./devops@2x.jpg'), // eslint-disable-line
            x3: require('./devops@3x.jpg'), // eslint-disable-line
          },
        },
        {
          name: 'Nikita Velko',
          role: 'Senior frontend developer ',
          photo: {
            x1: require('./frontend.jpg'), // eslint-disable-line
            x2: require('./frontend@2x.jpg'), // eslint-disable-line
            x3: require('./frontend@3x.jpg'), // eslint-disable-line
          },
        },
        {
          name: 'Alex Ponomaryov',
          role: 'iOS Developer',
          photo: {
            x1: require('./ios-dev.jpg'), // eslint-disable-line
            x2: require('./ios-dev@2x.jpg'), // eslint-disable-line
            x3: require('./ios-dev@3x.jpg'), // eslint-disable-line
          },
        },
        {
          name: 'Daniel Danilkin',
          role: 'Senior backend developer',
          photo: {
            x1: require('./backend.jpg'), // eslint-disable-line
            x2: require('./backend@2x.jpg'), // eslint-disable-line
            x3: require('./backend@3x.jpg'), // eslint-disable-line
          },
        },

        {
          name: 'Dzhavid Khalilov',
          role: 'Android developer',
          photo: {
            x1: require('./android-dev.jpg'), // eslint-disable-line
            x2: require('./android-dev@2x.jpg'), // eslint-disable-line
            x3: require('./android-dev@3x.jpg'), // eslint-disable-line
          },
        },

        {
          name: 'Dzera Gazdanova',
          role: 'Press Secretary',
          photo: {
            x1: require('./dzera.jpg'), // eslint-disable-line
            x2: require('./dzera@2x.jpg'), // eslint-disable-line
            x3: require('./dzera@3x.jpg'), // eslint-disable-line
          },
        },

        {
          name: 'Alina Belova',
          role: 'Public Relations',
          photo: {
            x1: require('./alina.jpg'), // eslint-disable-line
            x2: require('./alina@2x.jpg'), // eslint-disable-line
            x3: require('./alina@3x.jpg'), // eslint-disable-line
          },
        },
      ],
    };
  },
  components: {
    teamMember,
  },
  methods: {
    invokePopup(name) {
      this.memberToShow = this.team.findIndex(el => el.name === name);
      this.showPopup = true;
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
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";

.team-row {
  margin-top: 50px;
  margin-bottom: 230px;
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
