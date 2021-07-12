<template lang="pug">
MainLayout
  .container.text-center.py-6
    h1 {{ msg }}
    p {{counter}} - {{doubleCount}}
    p {{answer}}
    v-btn(@click="increment") Click
    br
    br
    v-btn.btn--primary(
      @click="$router.push('/home')"
    ) Back Home
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "@/store";
import MainLayout from "@/layout/MainLayout.vue";

export default defineComponent({
  name: "About",
  components: {
    MainLayout
  },
  setup() {
    const store = useStore();
    console.log(store);
    const increment = () => {
      store.commit("increment");
    };

    const fetchData = () => {
      store.dispatch("getAnswer");
    };

    onMounted(() => {
      fetchData();
    });

    return {
      counter: computed(() => store.state.counter.count),
      doubleCount: computed(() => store.getters.doubleCount),
      answer: computed(() => store.state.counter.answer),
      msg: "About Page",
      increment
    };
  }
});
</script>

<style lang="postcss" scoped></style>
