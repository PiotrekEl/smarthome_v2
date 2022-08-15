<template>
  <div class="weather">
    <div class="weather__top-bar">
      <div>
        {{ condition }}
      </div>
      <div class="weather__top-bar--padding-left">
        <font-awesome-icon icon="fa-solid fa-wind" />
        {{ wind.speed }}
        <font-awesome-icon icon="fa-solid fa-arrow-up" :style="windRotate" />
        {{ wind.dir }}
      </div>
      <div class="weather__top-bar--padding-left description">
        {{ lastUpdated }}
        <span class="">
          Last Update
        </span>
      </div>
    </div>
    <div class="weather__temp">
      <img :src="icon" alt="icon" />
      <div class="weather__temp--value">{{ tempC }}</div>
      <div class="weather__temp--feelslike">Feels like {{ feelsTemp }}</div>
    </div>
    <div class="weather__other">
      <div>Humidity {{ humidity }}</div>
      <div>Air pressure {{ pressure }}</div>
    </div>
    <hr class="date-time__divider">
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWind, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faWind, faArrowUp);

export default {
  name: 'CurrentWeather',

  components: {
    FontAwesomeIcon,
  },

  computed: {
    wind() {
      return {
        speed: this.$store.getters.forecast?.data?.current?.wind_kph,
        dir: this.$store.getters.forecast?.data?.current?.wind_dir,
        degree: this.$store.getters.forecast?.data?.current?.wind_degree,
      };
    },
    windRotate() {
      return { transform: `rotate(${this.wind.degree}deg)` };
    },
    condition() {
      return this.$store.getters.forecast?.data?.current?.condition.text;
    },
    lastUpdated() {
      return this.$store.getters.forecast?.data?.current?.last_updated.split(' ')[1];
    },
    icon() {
      return this.$store.getters.forecast?.data?.current?.condition?.icon;
    },
    tempC() {
      console.log(this.$store.getters.forecast?.data?.current);
      return `${this.$store.getters.forecast?.data?.current?.temp_c}°`;
    },
    feelsTemp() {
      return `${this.$store.getters.forecast?.data?.current?.feelslike_c}°`;
    },
    pressure() {
      return `${this.$store.getters.forecast?.data?.current?.pressure_mb} hPa`;
    },
    humidity() {
      return `${this.$store.getters.forecast?.data?.current?.humidity} % `;
    },
  },
};
</script>

<style lang="scss" scoped>
.weather {
  text-align: right;
  padding: 0 1rem;

  &__top-bar {
    display: flex;
    justify-content: space-between;

    &--padding-left {
      padding-left: 1rem;
    }

    &--rotate {
      transform: rotate(250deg);
    }
  }

  &__temp {
    font-size: 5rem;
    font-weight: 300;
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    align-items: center;

    img {
      width: 6.25rem;
      height: 100%;
      padding: 0.5rem;
    }

    &--feelslike {
      font-size: 1rem;
      width: 100%;
      letter-spacing: 1px;
      margin-bottom: 1rem;
    }
  }

  &__other {
    display: flex;
    justify-content: space-between;
  }

  &__divider {
    border-top: 1px solid;
  }
}
.description {
  position: relative;
  display: flex;
}
.description span {
  visibility: hidden;
  font-size: 0.8rem;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  right: 0;
  border-color: white;
}
.description:hover span {
  visibility: visible;
  border: 1px solid white;
}
</style>
