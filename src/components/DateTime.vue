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
  computed: {
    location() {
      return this.$store.getters.location?.name;
    },
    dateTime() {
      return this.$store.getters.dateTime;
    },
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
