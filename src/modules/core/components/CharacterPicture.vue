<template>
  <section>
    <img v-if="!showCharacter" :src="props.imageUrl" class="brightness-0 h-[200px]" />
    <img v-else :src="props.imageUrl" class="fade-in h-[250px]" />
  </section>
</template>

<script setup lang="ts">
interface Props {
  imageUrl?: string
  showCharacter: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showCharacter: false
})
</script>

<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
