import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weatherFromApi: {},
    forecastFromApi: {},
    dateTime: '',
    nowHour: '',
  },

  getters: {
    current(state) {
      return state.weatherFromApi.data?.current;
    },
    forecast(state) {
      return state.forecastFromApi;
    },
    location(state) {
      return state.forecastFromApi.data?.location;
    },
    dateTime(state) {
      return state.dateTime;
    },
    nowHour(state) {
      return state.nowHour;
    },
  },

  mutations: {
    saveWeatherFromApi(state, data) {
      state.weatherFromApi = data;
    },
    saveForecastFromApi(state, data) {
      state.forecastFromApi = data;
    },
    saveDateTime(state, dateTime) {
      state.dateTime = dateTime;
    },
    saveNowHour(state, hour) {
      state.nowHour = hour;
    },
  },

  actions: {
    async getForecastFromApi(context) {
      const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?', {
        params: {
          key: 'd6d816f3e87047df8e8155857222305',
          q: 'Dąbrowa Górnicza',
          days: 3,
          aqi: 'yes',
          alerts: 'yes',
        },
      });
      context.commit('saveForecastFromApi', response);
    },

    refreshTime(context) {
      const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dateTime = {
        time: Date().split(' ')[4].split(':').slice(0, 2).join(':'),
        date: Date().split(' ').slice(1, 4).join(' '),
        day: weekDay[new Date().getDay()],
      };
      context.commit('saveDateTime', dateTime);
    },

    nowHour(context) {
      const nowHour = new Date().getHours();
      context.commit('saveNowHour', nowHour);
    },
  },
  modules: {
  },
});
