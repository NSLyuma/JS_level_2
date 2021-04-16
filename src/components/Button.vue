<template>
  <div :class="[$style.button]" @click="$emit('clicked')">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style module>
.button {
  background-color: transparent;
  border: 1px solid #8b4513;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  width: 150px;
  margin: 0 auto;
  text-align: center;
}
</style>