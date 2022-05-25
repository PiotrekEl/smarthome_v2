<template>
    <div class="date-time">
        <div class="date-time__date">
            {{ dateTime.date }}
        </div>
        <div class="date-time__time">
            {{ dateTime.time }}
        </div>
        <div class="date-time__location">
            {{ location }}
        </div>
        <hr class="date-time__divider">
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dataFromApi: {},
    };
  },
  computed: {
    dateTime() {
      return {
        date: Date(this.dataFromApi).split(' ').slice(0, 4).join(' '),
        time: Date(this.dataFromApi).split(' ')[4].split(':').slice(0, 2).join(':'),
      };
    },
    location() {
      return this.dataFromApi.data.location.name;
    },
  },

  methods: {
    getDataFromApi() {
      return axios.get('http://api.weatherapi.com/v1/current.json?key=d6d816f3e87047df8e8155857222305&q=Dąbrowa Górnicza&aqi=yes');
    },
  },
  created() {
    this.getDataFromApi().then((response) => {
      this.dataFromApi = response;
      console.log(this.dataFromApi);
    });
  },
};
</script>

<style lang="scss" scoped>
.date-time {
  text-align: right;
  padding: 1rem;
  width: 18rem;
  position: fixed;
  right: 0;
  top: 0;
  &__date {
    font-size: 1.5rem;
    font-weight: 400;
  }
  &__time {
    font-size: 5rem;
    font-weight: 300;
  }
  &__location {
    padding-top: 1rem;
    text-transform: uppercase;
  }
  &__divider {
    border-top: 1px solid;
  }
}
</style>
