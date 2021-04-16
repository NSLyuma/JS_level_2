<template>
  <div :class="[$style.cartItem]">
    <img :src="getItemData.img" width="200px" />
    <p>Title: {{ getItemData.name }}</p>
    <p>Price: {{ getItemData.price * getItemData.quantity }}</p>
    <p>Quantity: {{ getItemData.quantity }}</p>
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

<style module>
.cartItem {
  display: flex;
  justify-content: space-between;
  background-color: #ffa07a;
  border-radius: 10px;
  padding: 10px;
  width: 500px;
  margin: 10px;
}

.quantity {
  width: 30px;
  height: 20px;
  background-color: transparent;
  border: none;
}
</style>