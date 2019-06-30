<template>
  <v-alert
    value="true"
    :type="alertType"
  >
    {{ formattedDate }}
  </v-alert>
</template>

<script>
const millisecondsInASecond = 1000;
const secondsInAMinute = 60;
const minutesInAnHour = 60;
const hoursInADay = 24;

export default {
  props: {
    date: {
      type: Date,
      required: true
    }
  },
  computed: {
    formattedDate() {
      return this.date.toLocaleString();
    },
    alertType() {
      const diffDay =
        parseInt(this.date.getTime() - Date.now()) /
        (millisecondsInASecond *
          secondsInAMinute *
          minutesInAnHour *
          hoursInADay);

      return diffDay < 0 ? "error" : diffDay < 5 ? "warning" : "info";
    }
  }
};
</script>

<style scoped>
</style>