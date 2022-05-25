<template>
  <div class="home">
    <div class="home__right-panel">
    <date-time/>
    <current-wheather/>
  </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import DateTime from '@/components/DateTime.vue';
import CurrentWheather from '@/components/CurrentWheather.vue';

export default {
  name: 'HomeView',
  components: {
    DateTime,
    CurrentWheather,
  },
};
</script>

<style lang="scss" scoped>
.home {

  &__right-panel {
  width: 20rem;
  position: fixed;
  right: 0;
  top: 0;
  }
}
</style>
