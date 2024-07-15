<template>
  <section class="flex flex-col mt-5">
    <button
      v-for="option in options"
      :key="option.id"
      @click="$emit('selectedOption', option.id)"
      :class="[
        'capitalize',
        {
          correct: option.id === correctAnswerId && disableOption,
          incorrect: option.id !== correctAnswerId && disableOption
        }
      ]"
      :disabled="disableOption"
    >
      {{ option.name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces/Pokemon'

interface Props {
  options: Pokemon[]
  correctAnswerId: number
  disableOption: boolean
}

defineProps<Props>()
defineEmits<{
  selectedOption: [id: number]
}>()
</script>

<style scoped>
button {
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}

.correct {
  @apply bg-green-200 animate-bounce;
}

.incorrect {
  @apply disabled:shadow-none disabled:bg-gray-100;
}
</style>
