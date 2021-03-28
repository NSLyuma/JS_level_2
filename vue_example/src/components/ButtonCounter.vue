<template>
  <button @click="onClick">Clicked {{ counter }} times</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter++;
    },
  },
};
</script>

<style>
</style>