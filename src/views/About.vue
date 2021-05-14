<template lang="pug">
.container.text-center.py-6
  h1 {{ msg }}
  span.inline-block.text-center.p-6
    img.inline-block(:src="Wallet")
  br
  router-link.btn--primary(to="/home") Back Home
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Wallet from "@/assets/icon/icon_wallet.svg";
export default defineComponent({
  name: "About",
  data() {
    return {
      msg: "About Page",
      Wallet
    };
  },
  setup() {}
});
</script>

<style lang="postcss" scoped>

</style>
