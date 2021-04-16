<template>
  <div>
    <div :class="[$style.goodsList]">
      <CatalogItem
        v-for="id in getItemsOnPage"
        :id="id"
        :key="id"
        @addItem="addToCart"
      />
    </div>
    <Button @clicked="loadMoreData">Show more</Button>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import CartItem from "./CartItem.vue";
import Button from "./Button.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    // ...mapMutations(["setData"]),
    ...mapActions(["requestData", "addToCart"]),
    loadMoreData() {
      this.page++;
      this.requestData(this.page);
    },
  },
  computed: {
    ...mapGetters(["getFullPrice", "getItemsOnPage"]),
  },
  created() {
    this.loadMoreData();
  },
  components: {
    CatalogItem,
    CartItem,
    Button,
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