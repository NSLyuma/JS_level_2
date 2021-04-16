<template>
  <div>
    <CartItem v-for="id in getItemsInCart" :id="id" :key="id" />
    <p :class="[$style.totalAmount]">Total amount: {{ getFullPrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";

export default {
  computed: {
    ...mapGetters(["getItemsInCart", "getFullPrice"]),
  },
  components: {
    CartItem,
  },
};
</script>

<style module>
.totalAmount {
  font-size: 24px;
  border: 2px solid #8b4513;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px;
}
</style>