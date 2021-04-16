<template>
  <div>
    <input
      :class="[$style.input]"
      type="text"
      placeholder="Title"
      v-model="name"
    /><br />
    <input
      :class="[$style.input]"
      type="text"
      placeholder="Price"
      v-model="price"
    /><br />
    <Button @clicked="addGood">Add new item</Button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Button from "./Button.vue";

export default {
  data() {
    return {
      name: "",
      price: "",
    };
  },
  methods: {
    ...mapActions(["addItem"]),
    addGood() {
      const goodToAdd = { name: this.name, price: this.price, img: "" };
      console.log(goodToAdd);
      this.addItem(goodToAdd);
    },
  },
  components: {
    Button,
  },
};
</script>

<style module>
.input {
  border: 1px solid #8b4513;
  border-radius: 3px;
  outline: none;
  margin-bottom: 10px;
  padding: 5px;
}
</style>