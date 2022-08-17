<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {

  async created() {
    await this.$store.dispatch('getForecastFromApi').then(() => {
    });
    setInterval(() => {
      this.$store.dispatch('getForecastFromApi').then(() => {});
    }, 900000);

    this.$store.dispatch('refreshTime');
    this.$store.dispatch('nowHour');
    setInterval(() => {
      this.$store.dispatch('refreshTime');
      this.$store.dispatch('nowHour');
    }, 10000);
  },
};
</script>

<style lang="scss">
@import '../node_modules/typeface-roboto/index.css';

body {
  margin: 0;
  padding: 0;
  color: #fff;
  background: #000;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
