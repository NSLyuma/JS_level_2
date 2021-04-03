<template>
  <div>
    <CartItem v-for="id in getItemsInCart" :id="id" :key="id" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";

export default {
  computed: {
    ...mapGetters(["getItemsInCart"]),
  },
  components: {
    CartItem,
  },
};
</script>

<style>
</style>