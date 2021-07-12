<template lang="pug">
header
  .header--fixed
    .container
      h1
        router-link(to="/home") Game
</template>

<script lang="ts" setup></script>

<style lang="postcss" scoped>
header {
  height: var(--header-height);

  & .header--fixed {
    height: var(--header-height);
    @apply fixed top-0 left-0 right-0 bg-primary text-white;
  }

  & .container {
    @apply h-full py-2;
  }
}

a {
  @apply hover:text-white;
}
</style>
