<template>
  <div :class="[$style.catalog]">
    <h2>Catalog</h2>
    <div>
      <Catalog />
    </div>
    <button id="showmore">Show more</button>

    <h2>Cart</h2>
    <div class="cart-list">
      <Cart />
    </div>
  </div>
</template>

<script>
import Catalog from "./components/Catalog.vue";

export default {
  components: {
    Catalog,
  },
};
</script>

<style module>
.catalog {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>