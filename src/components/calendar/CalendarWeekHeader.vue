<template>
  <th>
    <div class="single-date-picker__calendar-week-header">
      {{ day }}
    </div>
  </th>
</template>

<script>
export default {
  props: {
    day: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style scoped>
.single-date-picker__calendar-week-header {
  font-size: 14px;
  color: white;
}
</style>
