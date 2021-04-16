<template>
  <div :class="[$style.catalogItem]">
    <img :src="getItemData.img" width="200px" />
    <p>Title: {{ getItemData.name }}</p>
    <p>Price: {{ getItemData.price }}</p>
    <button @click="addToCart" :id="getItemData.id">Add to cart</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    id: String,
  },
  methods: {
    ...mapActions(["addToCart"]),
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
.catalogItem {
  display: flex;
  flex-direction: column;
  background-color: #ffa07a;
  border-radius: 10px;
  padding: 10px;
  width: 220px;
  margin: 10px;
}
</style>