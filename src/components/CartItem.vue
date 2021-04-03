<template>
  <div>
    <img :src="getItemData.img" width="200px" />
    <p>Title: {{ getItemData.name }}</p>
    <p>Price: {{ getItemData.price }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    id: String,
  },
  computed: {
    ...mapGetters(["getData"]),
    getItemData() {
      return this.getData[this.id];
    },
  },
};
</script>

<style>
</style>