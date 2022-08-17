<template>
  <ul class="forecast_hourly">
    <li v-for="(hour, idx) in forecastHoursNeeded" :key="`forecast_hourly_today_${idx}`"
      class="forecast_hourly__hour">
      <div>{{ formatHour(hour.time) }}</div>
      <div><img :src="hour.condition.icon" alt="icon"></div>
      <div>{{ formatTemp(hour.temp_c) }}°</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ForecastHourly',
  data() {
    return {
      neededHours: 8, // how many hours we want to show in the hourly forecast
    };
  },

  computed: {
    // for the hourly forecast, we need to calculate the number of hours
    forecastHoursNeeded() {
      return this.$store.getters.forecast?.data?.forecast?.forecastday[0]
        .hour.slice(this.startHour).concat(this.$store.getters.forecast?.data?.forecast
          ?.forecastday[1].hour.slice(0, this.startHour))
        .slice(0, this.neededHours) || [];
    },
    // for forecast hourly not current hour is need, we need next hour
    startHour() {
      return this.$store.getters.nowHour + 1;
    },
  },

  methods: {
    formatHour(time) {
      return time.split(' ')[1];
    },
    formatTemp(temp) {
      return temp.toString().split('.')[0];
    },
  },
  created() {
  },
};
</script>

<style scoped lang="scss">
.forecast_hourly {
  height: 32rem;
  overflow: hidden;
  position: relative;
  mix-blend-mode: hard-light;

  &__hour {
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
      width: 30%;
    }

    div:last-child {
      width: 40%;
      text-align: right;
    }
  }
}

// .forecast_hourly::after {
//   position: absolute;
//   left: 0;
//   top: 0;
//   content: "";
//   height: 100%;
//   width: 100%;
//   background: linear-gradient(transparent, black);
//   pointer-events: none;
// }
</style>
