<template>
  <div :class="[$style.catalogItem]">
    <img :src="item.img" width="200px" />
    <p>Title: {{ item.name }}</p>
    <p>Price: {{ item.price }}</p>
  </div>
</template>

<script>
export default {
  props: ["item"],
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
  height: 250px;
  margin: 10px;
}
</style>