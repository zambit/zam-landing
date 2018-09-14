<template>
  <div class="team-member">
    <slot name="photo" class="team-member__photo"></slot>
    <h4 class="team-member__name">{{ person.name }}</h4>
    <p class="team-member__role">{{ person.role }}</p>
    <div class="popup">
      <div class="popup-wrap">
        <div class="container">
          <div class="row">

          </div>
        </div>
      </div>
    </div>
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

</style>
