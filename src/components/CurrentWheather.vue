<template>
  <div class="weather">
    <div class="weather__top-bar">
      <div class="weather__top-bar--padding-left">
        {{ condition }}
      </div>
      <div class="weather__top-bar--padding-left">
        <font-awesome-icon icon="fa-solid fa-wind" />
        {{ wind.speed }} {{ wind.dir }}
      </div>
      <div class="weather__top-bar--padding-left">
        {{ lastUpdated }}
      </div>
    </div>
    <div class="weather__temp">
        <img :src="icon" alt="icon" />
        <div class="weather__temp--value">{{ tempC }}</div>
        <div class="weather__temp--feelslike">Feels like {{feelsTemp}}</div>
    </div>
    <hr class="date-time__divider">
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faWind);

export default {
  name: 'CurrentWeather',

  components: {
    FontAwesomeIcon,
  },

  computed: {
    wind() {
      return {
        speed: this.$store.getters.current?.wind_kph,
        dir: this.$store.getters.current?.wind_dir,
      };
    },
    condition() {
      return this.$store.getters.current?.condition.text;
    },
    lastUpdated() {
      return this.$store.getters.current?.last_updated.split(' ')[1];
    },
    icon() {
      return this.$store.getters.current?.condition?.icon;
    },
    tempC() {
      return `${this.$store.getters.current?.temp_c}°`;
    },
    feelsTemp() {
      return `${this.$store.getters.current?.feelslike_c}°`;
    },
  },
  created() {
    setInterval(() => {
      this.$store.dispatch('getDataFromApi');
      console.log('Pobrano dane:');
      console.log(Date().split(' ')[4].split(':').slice(0, 2).join(':'));
      console.log(this.lastUpdated);
    }, 900000);
  },
};
</script>

<style lang="scss" scoped>
.weather {
  text-align: right;
  padding: 0 1rem;

  &__top-bar {
      display: flex;
      justify-content: right;

    &--padding-left {
        padding-left: 2rem;

    }
  }

  &__temp {
    font-size: 5rem;
    font-weight: 300;
    display: flex;
    flex-wrap: wrap;
    justify-content: right;

    img {
      height: 100%;
      padding: 0.5rem;
    }
    &--feelslike {
      font-size: 1rem;
      width: 100%;
      letter-spacing: 1px;
    }
  }
  &__divider {
    border-top: 1px solid;
  }
}
</style>
