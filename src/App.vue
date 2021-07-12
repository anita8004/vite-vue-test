<template lang="pug">
AppLayout
  router-view
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AppLayout from "./layout/AppLayout.vue";

export default defineComponent({
  name: "App",
  components: {
    AppLayout
  }
});
</script>

<style lang="scss" scoped></style>
