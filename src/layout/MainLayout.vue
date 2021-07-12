<template lang="pug">
v-app-bar(density="compact")
  v-app-bar-title.mr-3
    router-link.logoLink.text-decoration-none(to="/") Game
  v-btn(text @click="aboutUrl") About
  v-spacer
  v-btn(
    icon="logout"
  ) Login
v-main
  slot
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const router = useRouter();

    const aboutUrl = () => {
      router.push({
        name: "About"
      })
    }

    return {
      aboutUrl
    }
  }
});
</script>

<style lang="scss" scoped>
.logoLink {
  color: inherit;
}
</style>
