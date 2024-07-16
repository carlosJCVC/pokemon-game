<template>
  <section class="flex flex-wrap mt-5">
    <div v-for="{ name, id } in options" :key="id" class="w-full md:w-1/2 p-2">
      <button
        @click="$emit('selectedOption', id)"
        :class="[
          'capitalize w-full',
          {
            correct: id === correctAnswerId && disableOption,
            incorrect: id !== correctAnswerId && disableOption
          }
        ]"
        :disabled="disableOption"
      >
        {{ name }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Character } from '@/modules/dbz/interfaces/Character'

interface Props {
  options: Character[]
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
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer text-center transition-all hover:bg-gray-100;
}

.correct {
  @apply bg-green-200 animate-bounce;
}

.incorrect {
  @apply disabled:shadow-none disabled:bg-gray-100;
}
</style>
