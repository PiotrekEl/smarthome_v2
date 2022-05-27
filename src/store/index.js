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
    async getWeatherFromApi(context) {
      const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=d6d816f3e87047df8e8155857222305&q=Dąbrowa Górnicza&aqi=yes');
      context.commit('saveWeatherFromApi', response);
    },
    async getForecastFromApi(context) {
      const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=d6d816f3e87047df8e8155857222305&q=Dąbrowa Górnicza&days=3&aqi=yes&alerts=yes');
      context.commit('saveForecastFromApi', response);
    },
  },
  modules: {
  },
});
