<template>
  <div
    class="relative max-w-sm rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 mx-2"
  >
    <img class="w-full h-80 object-cover" :src="bgimage" alt="Game Image" />
    <div
      class="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end"
    >
      <div>
        <div class="text-white text-2xl font-bold mb-2">Dragon Ball Z</div>
        <p class="text-gray-300 text-base mb-4">
          Experience the thrilling battles and adventures of Dragon Ball Z.
        </p>
      </div>
      <div class="flex flex-wrap gap-2 mb-4">
        <CategoryBadge title="Anime" bgcolor="bg-indigo-500" />
        <CategoryBadge title="Adventure" bgcolor="bg-red-900" />
        <CategoryBadge title="Comedy" bgcolor="bg-blue-500" />
        <CategoryBadge title="Fantasy" bgcolor="bg-gray-400" />
        <CategoryBadge title="Martial Arts" bgcolor="bg-lime-700" />
      </div>

      <RouterLink
        to="/pokemon"
        class="bg-yellow-800 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full text-center"
      >
        Play Now
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryBadge from './CategoryBadge.vue'

interface Props {
  bgimage: string
}

defineProps<Props>()
</script>

<style scoped></style>
