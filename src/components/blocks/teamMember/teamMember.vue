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
      </div>
      <h4 class="team-member__name">{{ person.name }}</h4>
      <p class="team-member__role">{{ person.role }}</p>
    </div>
  </div>
</template>

<script>
import './close-popup-icon.svg';

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
  transition: box-shadow .2s ease;
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
</style>
