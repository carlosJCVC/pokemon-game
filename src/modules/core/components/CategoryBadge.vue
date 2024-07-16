<template>
  <span
    :class="['inline-block text-white rounded-full px-2 py-1 text-sm font-semibold', bgcolor]"
    >{{ title }}</span
  >
</template>

<script setup lang="ts">
interface Props {
  title: string
  bgcolor: string
}

defineProps<Props>()
</script>

<style scoped></style>
