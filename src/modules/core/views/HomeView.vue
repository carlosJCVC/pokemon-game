<template>
  <div class="text-center mt-10 px-2">
    <h1 class="text-3xl font-bold">Anime Character Challenge</h1>
    <h1 class="text-3xl">Do you want to play?</h1>
  </div>

  <div class="flex items-center justify-center flex-wrap max-h-screen p-6">
    <CardMenu
      title="Dragon Ball Z"
      description="Experience the thrilling battles and adventures of Dragon Ball Z."
      route-name="dbz"
      :categories="dbzcategories"
      :bg-image="dbzimage"
    />
    <CardMenu
      title="Pokemon"
      description="Pokémon are creatures of all shapes and sizes who live alongside humans."
      route-name="pokemon"
      :categories="pokemoncategories"
      :bg-image="pokemonimage"
    />
  </div>
</template>

<script setup lang="ts">
import CardMenu from '../components/CardMenu.vue'
import dbzimage from '@/assets/images//bg-dbz.png'
import pokemonimage from '@/assets/images/bg-pokemon.jpeg'
import { dbzcategories, pokemoncategories } from '../helpers/categories'
</script>

<style lang="scss" scoped></style>
