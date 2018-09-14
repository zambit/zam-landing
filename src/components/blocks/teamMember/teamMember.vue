<template>
  <div class="team-member">
    <div
      class="team-member__photo"
      :style="{ backgroundImage: require(`url(${person.photo})`) }"
    ></div>
    <h4 class="team-member__name">{{ person.name }}</h4>
    <p class="team-member__role">{{ person.role }}</p>
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

</style>
