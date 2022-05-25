import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataFromApi: {},
  },
  getters: {
    date(state) {
      return Date(state.dataFromApi).split(' ').slice(1, 4).join(' ');
    },
    time(state) {
      return Date(state.dataFromApi).split(' ')[4].split(':').slice(0, 2).join(':');
    },
  },
  mutations: {
    saveDataFromApi(state, data) {
      state.dataFromApi = data;
    },
  },
  actions: {
    async getDataFromApi(context) {
      const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=d6d816f3e87047df8e8155857222305&q=Dąbrowa Górnicza&aqi=yes');
      context.commit('saveDataFromApi', response);
    },

  },
  modules: {
  },
});
