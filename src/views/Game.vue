<template lang="pug">
MainLayout
  v-container
    #gameIframe
      .gameCover(v-show="!show")
        span Loading...
      iframe#game(:src="gameHtml")
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted} from "vue";
import MainLayout from "@/layout/MainLayout.vue";

export default defineComponent({
  name: "Game",
  components: {
    MainLayout
  },
  props: {
    gameName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      show: false
    });

    onMounted(() => {
      const game = document.getElementById("game");
      game.addEventListener("load", (e: any) => {
        console.log(e.type)
        state.show = true;
      })
    })


    return {
      ...toRefs(state),
      gameHtml: "/game/" + props.gameName + "/index.html"
    }
  }
});
</script>

<style lang="scss" scoped>
#gameIframe {
  width: 100%;
  height: calc(100vh - 48px - 2rem);
  position: relative;

  .gameCover {
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2rem;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
}
</style>
