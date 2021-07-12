<template lang="pug">
MainLayout
  v-container
    #gameIframe
      .gameCover
      iframe#game(:src="gameHtml")
</template>

<script lang="ts">
import {defineComponent} from "vue";
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



    return {
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

  //.gameCover {
  //  content: "";
  //  display: block;
  //  width: 100%;
  //  height: 100%;
  //  background-color: white;
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //}

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
}
</style>
