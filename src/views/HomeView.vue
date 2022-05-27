<template>
  <div class="home">
    <div class="home__right-panel">
      <date-time/>
      <current-weather/>
    </div>
    <div class="home__left-panel">
      <calendar :firstDayOfWeek = 1 />
      <hr class="divider"/>
      <forecast-weather/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DateTime from '@/components/DateTime.vue';
import CurrentWeather from '@/components/CurrentWeather.vue';
import ForecastWeather from '@/components/ForecastWeather.vue';
import Calendar from '@/components/calendar/CalendarView.vue';

export default {
  name: 'HomeView',
  components: {
    DateTime,
    CurrentWeather,
    ForecastWeather,
    Calendar,
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

  &__left-panel {
  width: 20rem;
  position: fixed;
  left: 0;
  top: 0;
  }
}
.divider {
  margin: 0 1rem;
}
</style>
