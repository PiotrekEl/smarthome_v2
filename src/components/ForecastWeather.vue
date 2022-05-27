<template>
  <ul class="forecast">
    <li v-for="(day, idx) in forecastDays"
      :key="`forecastDay${idx}`"
      class="forecast__day">
      <div>{{ formatDate(day) }}</div>
      <div><img :src="day.day.condition.icon" alt="icon"></div>
      <div>{{ day.day.avgtemp_c }}°</div>
      <div>{{ day.day.mintemp_c }}° - {{ day.day.maxtemp_c }}°</div>
    </li>
  <hr class="forecast__divider">
  </ul>
</template>

<script>
export default {
  name: 'ForecastWeather',
  data() {
    return {
      weekDay: ['Sun', 'Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat'],
    };
  },
  computed: {
    forecastDays() {
      return this.$store.getters.forecast?.data?.forecast.forecastday;
    },
  },
  methods: {
    formatDate(day) {
      return this.weekDay[new Date(day.date).getDay()];
    },
  },
  created() {
    // console.log(this.$store.getters.forecast);
  },
};
</script>

<style lang="scss" scoped>
.forecast {
  text-align: right;
  padding: 0 1rem;

  &__day {
    list-style: none;
    display: flex;
    height: 2rem;
    align-items: center;

    img {
      height: 2rem;
    }
    div {
      width: 25%;
      text-align: left;
    }
    div:first-child {
        width: 20%;
    }
    div:last-child {
        width: 30%;
        text-align: right;
    }
  }

  &__divider {
    border-top: 1px solid;
  }
}
</style>
