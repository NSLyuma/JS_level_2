<template>
  <div>
    <Header :message="msg" />
    <button @click="changeMsg">Click</button>
    <br />
    <ButtonCounter />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ButtonCounter from "./components/ButtonCounter.vue";

export default {
  data() {
    return {
      msg: "My header from App.vue",
    };
  },
  components: {
    Header,
    ButtonCounter,
  },
  methods: {
    changeMsg() {
      this.msg = "My new message from App.vue";
    },
  },
};
</script>

<style module>
.myheader {
  color: cornflowerblue;
}
</style>