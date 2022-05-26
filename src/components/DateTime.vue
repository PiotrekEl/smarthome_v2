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
      dateTime: {
        time: '',
        date: '',
        day: '',
      },
    };
  },
  computed: {
    location() {
      return this.$store.state.dataFromApi.data?.location.name;
    },
  },

  methods: {
    refreshTime() {
      this.dateTime = {
        time: Date().split(' ')[4].split(':').slice(0, 2).join(':'),
        date: Date().split(' ').slice(1, 4).join(' '),
        day: this.weekDay[new Date().getDay()],
      };
    },
  },
  created() {
    this.refreshTime();
    setInterval(this.refreshTime, 10000);
  },
};
</script>

<style lang="scss" scoped>
.date-time {
  text-align: right;
  padding: 1rem;
  padding-bottom: 0;
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
