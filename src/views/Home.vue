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
        .d-sm-flex.justify-lg-space-between
          div(:style="{width: smAndUp ? '200px' : '100%', height: '200px'}")
            v-img(
              :height="200"
              :width="smAndUp ? 200 : '100%'"
              src="https://fakeimg.pl/600/"
              cover
            )
          v-card-text.flex-grow-1
            v-card-title Game {{item}}
            v-card-subtitle Lorem ipsum dolor sit amet, aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
            v-card-actions.justify-end
              v-btn VIEW
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import MainLayout from "@/layout/MainLayout.vue";
import {useStore} from "@/store";
import { useDisplay } from "vuetify/lib/composables/display";

export default defineComponent({
  name: "Home",
  components: {
    MainLayout
  },
  setup() {
    const store = useStore();

    const { smAndUp } = useDisplay();

    const setDark = () => {
      store.commit("changeTheme", "dark")
    }

    const setLight = () => {
      store.commit("changeTheme", "light")
    }

    return {
      setDark,
      setLight,
      smAndUp
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
