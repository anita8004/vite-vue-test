<template lang="pug">
MainLayout
  .container.text-center.py-6
    v-btn.mr-3(
      textColor="white"
      color="black"
      @click="setDark"
    ) dark
    v-btn(@click="setLight") light
  v-container
    .game-list
      v-card.game-item(v-for="item in 3" :key="item")
        .d-flex.justify-lg-space-between
          div(:style="{width: '200px', height: '200px'}")
            v-img(
              :height="200"
              :width="200"
              src="https://fakeimg.pl/300/"
            )
          v-card-text.flex-grow-1
            v-card-title Game {{item}}
            v-card-subtitle Lorem ipsum dolor sit amet, aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
            v-card-actions.justify-end
              v-btn VIEW
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MainLayout from "@/layout/MainLayout.vue";
import {useStore} from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    MainLayout
  },
  setup() {
    const store = useStore();

    const setDark = () => {
      store.commit("changeTheme", "dark")
    }

    const setLight = () => {
      store.commit("changeTheme", "light")
    }

    return {
      setDark,
      setLight
    }
  }
});
</script>

<style lang="scss" scoped>
.game-list {
  .game-item {
    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
}
</style>
