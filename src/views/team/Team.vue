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
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
          <team-member :person="team[0]">
            <template slot="photo">
              <img
                src="./ceo.jpg"
                srcset="./ceo@2x.jpg 2x, ./ceo@3x.jpg 3x"
                alt=""
              >
            </template>
          </team-member>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
          <team-member :person="team[1]">
            <template slot="photo">
              <img
                src="./cvo.jpg"
                srcset="./cvo@2x.jpg 2x, ./cvo@3x.jpg 3x"
                alt=""
              >
            </template>
          </team-member>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
          <team-member :person="team[2]">
            <template slot="photo">
              <img
                src="./cmo.jpg"
                srcset="./cmo@2x.jpg 2x, ./cmo@3x.jpg 3x"
                alt=""
              >
            </template>
          </team-member>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
          <team-member :person="team[3]">
            <template slot="photo">
              <img
                src="./zakaria.jpg"
                srcset="./zakaria@2x.jpg 2x, ./zakaria@3x.jpg 3x"
                alt=""
              >
            </template>
          </team-member>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
          <team-member :person="team[4]">
            <template slot="photo">
              <img
                src="./cto.jpg"
                srcset="./cto@2x.jpg 2x, ./cto@3x.jpg 3x"
                alt=""
              >
            </template>
          </team-member>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
          <team-member :person="team[5]">
            <template slot="photo">
              <img
                src="./devops.jpg"
                srcset="./devops@2x.jpg 2x, ./devops@3x.jpg 3x"
                alt=""
              >
            </template>
          </team-member>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
          <team-member :person="team[6]">
            <template slot="photo">
              <img
                src="./frontend.jpg"
                srcset="./frontend@2x.jpg 2x, ./frontend@3x.jpg 3x"
                alt=""
              >
            </template>
          </team-member>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
          <team-member :person="team[7]">
            <template slot="photo">
              <img
                src="./ios-dev.jpg"
                srcset="./ios-dev@2x.jpg 2x, ./ios-dev@3x.jpg 3x"
                alt=""
              >
            </template>
          </team-member>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
          <team-member :person="team[8]">
            <template slot="photo">
              <img
                src="./backend.jpg"
                srcset="./backend@2x.jpg 2x, ./backend@3x.jpg 3x"
                alt=""
              >
            </template>
          </team-member>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
          <team-member :person="team[9]">
            <template slot="photo">
              <img
                src="./android-dev.jpg"
                srcset="./android-dev@2x.jpg 2x, ./android-dev@3x.jpg 3x"
                alt=""
              >
            </template>
          </team-member>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
          <team-member :person="team[10]">
            <template slot="photo">
              <img
                src="./dzera.jpg"
                srcset="./dzera@2x.jpg 2x, ./dzera@3x.jpg 3x"
                alt=""
              >
            </template>
          </team-member>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
          <team-member :person="team[11]">
            <template slot="photo">
              <img
                src="./alina.jpg"
                srcset="./alina@2x.jpg 2x, ./alina@3x.jpg 3x"
                alt=""
              >
            </template>
          </team-member>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import teamMember from '@/components/blocks/teamMember';

import './ceo.jpg';

export default {
  name: 'team-page',
  data() {
    return {
      team: [
        {
          name: 'Iliya Biniaminov',
          role: 'CEO, Co-Founder',
          photo: './ceo.jpg',
        },
        {
          name: 'Alex Mikh',
          role: 'CVO, Co-Founder',
          photo: '',
        },
        {
          name: 'George Gus',
          role: 'CMO, Co-Founder',
          photo: '',
        },
        {
          name: 'Zakaria Mekreloufi',
          role: 'CEO of the MENA region',
          photo: '',
        },
        {
          name: 'Andrew Skurlatov',
          role: 'CTO',
          photo: '',
        },
        {
          name: 'Ivan Podtsebnev',
          role: 'Head of DevOps & Security',
          photo: '',
        },
        {
          name: 'Nikita Velko',
          role: 'Senior frontend developer ',
          photo: '',
        },
        {
          name: 'Alex Ponomaryov',
          role: 'iOS Developer',
          photo: '',
        },
        {
          name: 'Daniel Danilkin',
          role: 'Senior backend developer',
          photo: '',
        },

        {
          name: 'Dzhavid Khalilov',
          role: 'Android developer',
          photo: '',
        },

        {
          name: 'Dzera',
          role: 'CEO of the MENA region',
          photo: '',
        },

        {
          name: 'Alina Belova',
          role: 'CEO of the MENA region',
          photo: '',
        },
      ],
    };
  },
  components: {
    teamMember,
  },
};
</script>

<style lang="scss" scoped>
.team-row {
  margin-top: 50px;
  margin-bottom: 230px;
}

.team-title {
  margin-top: 80px;
}
</style>
