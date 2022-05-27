import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weatherFromApi: {},
    forecastFromApi: {},
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
  },
  mutations: {
    saveWeatherFromApi(state, data) {
      state.weatherFromApi = data;
    },
    saveForecastFromApi(state, data) {
      state.forecastFromApi = data;
    },
  },
  actions: {
    async getForecastFromApi(context) {
      // const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=d6d816f3e87047df8e8155857222305&q=Dąbrowa Górnicza&days=3&aqi=yes&alerts=yes');
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
  },
  modules: {
  },
});
