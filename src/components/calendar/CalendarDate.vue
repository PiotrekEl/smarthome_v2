<template>
  <td>
    <div
      v-show="date"
      class="single-date-picker__date"
      :class="{'single-date-picker__today': isToday,
               'single-date-picker__selected': isSelected}"
      @click="selectDate"
      @keypress.space="selectDate"
    >
      {{ date }}
    </div>
  </td>
</template>

<script>
export default {
  props: {
    date: {
      type: Number,
      default: () => 1,
    },
    isToday: {
      type: Boolean,
      default: false,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectDate() {
      this.$emit('selectDate', this.date);
    },
  },
};
</script>

<style lang="scss" scoped>
.single-date-picker__date {
  font-size: 14px;
  height: 20px;
  width: 35px;
  display: table-cell;
  vertical-align: middle;
  box-sizing: border-box;
  cursor: default;

  &:hover,
  &.single-date-picker__selected {
    border: 1px solid lightgray;
  }

  &.single-date-picker__today {
    background-color: white;
    color: black;
  }
}
</style>
