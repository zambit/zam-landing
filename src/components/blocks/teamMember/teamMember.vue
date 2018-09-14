<template>
  <div class="team-member">
    <slot name="photo" class="team-member__photo"></slot>
    <h4 class="team-member__name">{{ person.name }}</h4>
    <p class="team-member__role">{{ person.role }}</p>
    <transition appear name="fade">
      <div v-if="false" class="popup">
        <div class="popup-wrap">
          <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">

            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
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


.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}

.popup-wrap {
}
</style>
