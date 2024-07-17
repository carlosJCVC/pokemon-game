<template>
  <div
    class="relative max-w-sm rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 mx-2 my-2"
  >
    <img class="w-full h-80 object-cover" :src="bgImage" alt="Game Image" />
    <div
      class="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end"
    >
      <div>
        <div class="text-white text-2xl font-bold mb-2">{{ title }}</div>
        <p class="text-gray-300 text-base mb-4">
          {{ description }}
        </p>
      </div>
      <div class="flex flex-wrap gap-2 mb-4">
        <CategoryBadge
          v-for="({ title, bgColor }, index) in categories"
          :key="index"
          :title="title"
          :bgcolor="bgColor"
        />
      </div>

      <RouterLink
        :to="{ name: routeName }"
        class="bg-yellow-800 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full text-center"
      >
        Play Now
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '../interfaces/Category'
import CategoryBadge from './CategoryBadge.vue'

interface Props {
  title: string
  description: string
  routeName: string
  categories: Category[]
  bgImage?: string
}

defineProps<Props>()
</script>

<style scoped></style>
