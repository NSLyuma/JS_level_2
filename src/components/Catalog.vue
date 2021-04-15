<template>
  <div :class="[$style.goodsList]">
    <div v-for="item in items" :key="item.name">
      <CatalogItem :item="item"></CatalogItem>
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";

export default {
  data() {
    return {
      items: [
        {
          name: "Bread",
          price: 15,
          img: "./img/bread.jpg",
        },
        {
          name: "Cheese",
          price: 100,
          img: "./img/cheese.jpg",
        },
        {
          name: "Tea",
          price: 50,
          img: "img/tea.jpg",
        },
        {
          name: "Pizza",
          price: 80,
          img: "img/pizza.jpg",
        },
      ],
    };
  },
  components: {
    CatalogItem,
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