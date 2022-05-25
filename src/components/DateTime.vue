<template>
    <div class="date-time">
        <div class="date-time__date">
            {{ dateTime.day }}, {{ dateTime.date }}
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

export default {
  data() {
    return {
      dataFromApi: {},
      weekDay: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    };
  },
  computed: {
    dateTime() {
      return {
        time: this.$store.getters.time,
        date: this.$store.getters.date,
        day: this.weekDay[new Date().getDay()],
      };
    },
    location() {
      return this.$store.state.dataFromApi.data.location.name;
    },
  },

  methods: {
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>
.date-time {
  text-align: right;
  padding: 1rem;
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
