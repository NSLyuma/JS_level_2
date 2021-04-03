<template>
  <div>
    <CatalogItem
      v-for="id in getItemsOnPage"
      :id="id"
      :key="id"
      @addItem="addToCart"
    />
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import CartItem from "./CartItem.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  methods: {
    // ...mapMutations(["setData"]),
    ...mapActions(["requestData", "addToCart"]),
  },
  computed: {
    ...mapGetters(["getFullPrice", "getItemsOnPage"]),
  },
  created() {
    this.requestData(1);
  },
  components: {
    CatalogItem,
    CartItem,
  },
};
</script>

<style module>
.goodsList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>