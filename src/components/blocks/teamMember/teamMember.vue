<template>
  <div class="team-member">
    <div @click="$emit('member', person.name)">
      <div class="team-member__photo-wrap">
        <img
          :src="person.photo.x1"
          :srcset="`${person.photo.x2} 2x, ${person.photo.x3} 3x`"
          class="team-member__photo"
          alt=""
        >
        <div class="icons-wrap">
          <a
            v-if="person.facebook.length > 0"
            :href="person.facebook"
            target="_blank"
            rel="noreferrer noopener"
            @click.stop
          >
            <svg class="icon">
              <use xlink:href="#icon--facebook--colored"></use>
            </svg>
          </a>
          <a
            v-if="person.linkedin.length > 0"
            :href="person.linkedin"
            class="ml-1"
            target="_blank"
            rel="noreferrer noopener"
            @click.stop
          >
            <svg class="icon">
              <use xlink:href="#icon--linked-in--colored"></use>
            </svg>
          </a>
        </div>
      </div>
      <h4 class="team-member__name">{{ person.name }}</h4>
      <p class="team-member__role">{{ person.role }}</p>
    </div>
  </div>
</template>

<script>
import './close-popup-icon.svg';
import './icon--facebook--colored.svg';
import './icon--linked-in--colored.svg';

export default {
  name: 'team-member',
  props: {
    person: {
      type: Object,
      required: true,
      default() {
        return {
          photo: '',
          name: '',
          role: '',
          list: [],
          linkedin: '',
          facebook: '',
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover .team-member__photo-wrap {
    box-shadow: 15px 25px 42px 0 #c5c5c5;
  }
}

.team-member__photo-wrap {
  position: relative;
  transition: box-shadow .2s ease;
}

.icons-wrap {
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.team-member__photo {
  width: 100%;
  height: 360px;
  background-color: #aeaeae;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
}

.team-member__name {
  font-size: 1.3125rem;
  font-weight: bold;
  letter-spacing: 0.7px;
  color: #2a3271;
  margin-top: 23px;
}

.team-member__role {
  font-size: 0.9375rem;
  letter-spacing: 0.5px;
  color: $sky-blue;
  margin-top: 6px;
}

.icon {
  width: 35px;
  height: 35px;
}
</style>
