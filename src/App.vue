<template>
  <div :class="[$style.catalog]">
    <h2>Catalog</h2>
    <div>
      <Catalog />
    </div>

    <h2>Cart</h2>
    <AddForm />
    <div class="cart-list">
      <Cart />
    </div>
  </div>
</template>

<script>
import Catalog from "./components/Catalog.vue";
import Cart from "./components/Cart.vue";
import AddForm from "./components/AddForm.vue";

export default {
  components: {
    Catalog,
    Cart,
    AddForm,
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