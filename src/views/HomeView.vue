<template>
  <div class="home">
    <div class="home__right-panel">
      <date-time/>
      <current-weather/>
      <forecast-weather/>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import DateTime from '@/components/DateTime.vue';
import CurrentWeather from '@/components/CurrentWeather.vue';
import ForecastWeather from '@/components/ForecastWeather.vue';

export default {
  name: 'HomeView',
  components: {
    DateTime,
    CurrentWeather,
    ForecastWeather,
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
