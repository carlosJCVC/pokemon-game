<script setup lang="ts">
console.log('sa')
</script>

<template>
  <header>
    <div class="wrapper">You did it!</div>
  </header>

  <main>Hello World</main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
