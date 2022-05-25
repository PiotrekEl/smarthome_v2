<template>
  <div class="home">
    <date-time/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import DateTime from '@/components/DateTime.vue';

export default {
  name: 'HomeView',
  components: {
    DateTime,
  },
};
</script>

<style lang="scss" scoped>

</style>
