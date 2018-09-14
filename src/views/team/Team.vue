<template>
  <section class="team-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section-title">Our news</h2>
        </div>
      </div>
      <div class="row">
        <template v-for="person in team">
          <team-member :key="person.name" :person="person" />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import teamMember from '@/components/blocks/teamMember';

export default {
  name: 'team-page',
  data() {
    return {
      team: [
        { name: '', role: '', photo: '' },
        { name: '', role: '', photo: '' },
        { name: '', role: '', photo: '' },
        { name: '', role: '', photo: '' },
        { name: '', role: '', photo: '' },
        { name: '', role: '', photo: '' },
        { name: '', role: '', photo: '' },
        { name: '', role: '', photo: '' },
        { name: '', role: '', photo: '' },
      ],
    };
  },
  components: {
    teamMember,
  },
};
</script>

<style lang="scss" scoped>

</style>
