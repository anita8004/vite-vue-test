<template lang="pug">
.container.text-center.py-6
  h1 {{ msg }}
  p {{counter}} - {{doubleCount}}
  p {{answer}}
  button(@click="increment") Click
  br
  br
  router-link.btn--primary(to="/home") Back Home
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "About",
  setup() {
    const store = useStore();
    console.log(store);
    const increment = () => {
      store.commit("increment");
    }

    const fetchData = () => {
      store.dispatch("getAnswer")
    }

    onMounted(() => {
      fetchData();
    })

    return {
      counter: computed(() => store.state.counter.count),
      doubleCount: computed(() => store.getters.doubleCount),
      answer: computed(() => store.state.counter.answer),
      msg: "About Page",
      increment,
    }
  }
});
</script>

<style lang="postcss" scoped>

</style>
