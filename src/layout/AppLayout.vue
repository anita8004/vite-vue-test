<template lang="pug">
v-app(:theme="theme")
  slot
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import {useStore} from "@/store";

export default defineComponent({
  name: "AppLayout",
  setup() {
    const store = useStore();
    return {
      theme: computed(() => store.state.theme.theme)
    }
  }
});
</script>

<style lang="scss" scoped></style>
