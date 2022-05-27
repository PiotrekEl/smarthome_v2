<template>
  <div class="single-date-picker__calendar-month-header">
    <div
      class="single-date-picker__arrow left"
      @click="toggleMonth(-1)"
      @keypress.left="toggleMonth(-1)"
    >
      <i class="material-icons">
        <!-- keyboard_arrow_left -->
      </i>
    </div>
    <div class="single-date-picker__year">
      {{ fullMonth }} {{ year }}
    </div>
    <div
      class="single-date-picker__arrow right"
      @click="toggleMonth(1)"
      @keypress.right="toggleMonth(1)"
    >
      <i class="material-icons">
        <!-- keyboard_arrow_right -->
      </i>
    </div>
    <hr class="divider" />
  </div>
</template>

<script>
const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];
export default {
  props: {
    year: {
      type: Number,
      default: () => 1970,
    },
    month: {
      type: Number,
      default: () => 0,
    },
  },
  computed: {
    fullMonth() {
      return MONTHS[this.month];
    },
  },
  methods: {
    toggleMonth(direction) {
      this.$emit('toggleMonth', direction);
    },
  },
};
</script>

<style lang="scss" scoped>
.single-date-picker__calendar-month-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: white;

  .single-date-picker__year {
    text-transform: capitalize;
    font-weight: bold;
  }
  .single-date-picker__arrow {
    cursor: pointer;
  }

  .divider {
      width: 100%;
      margin: 0;
  }
}
</style>
