<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="card">
      <h2 class="card-header">User Score</h2>
      <div class="card-body mb-4">
        <div
          class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse opacity-50"
        ></div>
        <div
          class="relative bg-blue-500 text-white rounded-full h-24 w-24 flex items-center justify-center text-3xl font-semibold z-10"
        >
          {{ score }}
        </div>
      </div>
      <p class="text-gray-600 mb-4">Keep it up, you are doing great!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  score: number
}

defineProps<Props>()
</script>

<style scoped>
.card {
  @apply bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center;
}

.card-header {
  @apply text-2xl font-bold text-gray-800 mb-4;
}

.card-body {
  @apply relative flex items-center justify-center;
}
</style>
